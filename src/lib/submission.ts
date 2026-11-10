import * as v from "valibot";

const wordCount = (value: string) =>
  value.trim().split(/\s+/).filter(Boolean).length;

const wordRange = (min: number, max: number) =>
  v.check(
    (input: string) => {
      const count = wordCount(input);
      return count >= min && count <= max;
    },
    `Entre ${min} y ${max} palabras`
  );

export const authorSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(3, "Nombre completo")),
  email: v.pipe(v.string(), v.trim(), v.email("Correo inválido")),
  affiliation: v.pipe(v.string(), v.trim(), v.minLength(3, "Filiación requerida")),
  orcid: v.optional(
    v.pipe(
      v.string(),
      v.trim(),
      v.regex(
        /^$|^https:\/\/orcid\.org\/\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/,
        "ORCID inválido"
      )
    )
  ),
  corresponding: v.boolean(),
});

export const submissionSchema = v.object({
  type: v.pipe(v.string(), v.nonEmpty("Selecciona un tipo")),
  title: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(10, "Mínimo 10 caracteres"),
    v.maxLength(200, "Máximo 200 caracteres")
  ),
  abstractEs: v.pipe(v.string(), v.trim(), wordRange(150, 250)),
  abstractEn: v.pipe(v.string(), v.trim(), wordRange(150, 250)),
  keywordsEs: v.pipe(
    v.array(v.string()),
    v.minLength(3, "Al menos 3 palabras clave"),
    v.maxLength(6, "Máximo 6 palabras clave")
  ),
  keywordsEn: v.pipe(
    v.array(v.string()),
    v.minLength(3, "Al menos 3 keywords"),
    v.maxLength(6, "Máximo 6 keywords")
  ),
  authors: v.pipe(
    v.array(authorSchema),
    v.minLength(1, "Agrega al menos un autor"),
    v.check(
      (list) => list.filter((author) => author.corresponding).length === 1,
      "Marca exactamente un autor de correspondencia"
    )
  ),
  manuscript: v.pipe(
    v.boolean(),
    v.check((value) => value, "Adjunta el manuscrito")
  ),
  declarations: v.object({
    original: v.pipe(v.boolean(), v.check((value) => value, "Declaración obligatoria")),
    authorship: v.pipe(v.boolean(), v.check((value) => value, "Declaración obligatoria")),
    conflict: v.pipe(v.boolean(), v.check((value) => value, "Declaración obligatoria")),
    ethics: v.pipe(v.boolean(), v.check((value) => value, "Declaración obligatoria")),
    ai: v.boolean(),
    license: v.pipe(v.boolean(), v.check((value) => value, "Declaración obligatoria")),
  }),
  notes: v.optional(v.string()),
});

export type Submission = v.InferInput<typeof submissionSchema>;
export type Author = v.InferInput<typeof authorSchema>;

export const emptyAuthor = (corresponding = false): Author => ({
  name: "",
  email: "",
  affiliation: "",
  orcid: "",
  corresponding,
});

export const emptySubmission = (): Submission => ({
  type: "",
  title: "",
  abstractEs: "",
  abstractEn: "",
  keywordsEs: [],
  keywordsEn: [],
  authors: [emptyAuthor(true)],
  manuscript: false,
  declarations: {
    original: false,
    authorship: false,
    conflict: false,
    ethics: false,
    ai: false,
    license: false,
  },
  notes: "",
});

/** Campos que valida cada paso del formulario. */
export const stepFields: Record<number, string[]> = {
  1: ["type", "title", "abstractEs", "abstractEn", "keywordsEs", "keywordsEn"],
  2: ["authors"],
  3: ["manuscript"],
  4: ["declarations"],
  5: [],
};

/** Schema parcial de cada paso, para validar sin exigir los siguientes. */
export const stepSchemas = {
  1: v.pick(submissionSchema, [
    "type",
    "title",
    "abstractEs",
    "abstractEn",
    "keywordsEs",
    "keywordsEn",
  ]),
  2: v.pick(submissionSchema, ["authors"]),
  3: v.pick(submissionSchema, ["manuscript"]),
  4: v.pick(submissionSchema, ["declarations"]),
} as const;

/** Convierte los issues de Valibot en un mapa campo → mensaje. */
export function collectIssues(issues: readonly { path?: readonly { key?: unknown }[]; message: string }[]) {
  const map: Record<string, string> = {};
  for (const issue of issues) {
    const key = (issue.path ?? [])
      .map((item) => String(item.key ?? ""))
      .join(".");
    if (key && !map[key]) map[key] = issue.message;
  }
  return map;
}
