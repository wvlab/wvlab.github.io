import { z, reference, defineCollection } from "astro:content";

export enum Language {
  en,
  uk,
  ru,
}

const arrayOrElement = (zelem: any) => z.union([zelem, z.array(zelem)]);

export interface DefaultContent {
  title?: string;
  date: Date;
  lang: Language[] | Language;
  slug: string;
}

const defaultContentScheme = z.object({
  title: z.string().optional(),
  date: z.date().optional(),
  lang: arrayOrElement(z.enum(["en", "uk", "ru"])),
});

const proseCollection = defineCollection({
  type: "content",
  schema: defaultContentScheme.extend({
    related: z.array(reference("related")).optional(),
  }),
});

const poetryCollection = defineCollection({
  type: "content",
  schema: defaultContentScheme.extend({
    related: z.array(reference("related")).optional(),
  }),
});

// const programmingCollection = defineCollection({
//   type: "content",
//   schema: defaultContentScheme.extend({
//     related: z.array(reference("related")).optional(),
//   }),
// });
// 
// const personalCollection = defineCollection({
//   type: "content",
//   schema: defaultContentScheme.extend({
//     related: z.array(reference("related")).optional(),
//   }),
// });
// 
// const psychologyCollection = defineCollection({
//   type: "content",
//   schema: defaultContentScheme.extend({
//     related: z.array(reference("related")).optional(),
//   }),
// });

const relatedCollection = defineCollection({
  type: "content",
});

const quotesAboutMeBelovedCollection = defineCollection({
  type: "data",
});

export const collections = {
  prose: proseCollection,
  poetry: poetryCollection,
  // programming: programmingCollection,
  // personal: personalCollection,
  // psychology: psychologyCollection,
  related: relatedCollection,
  sayings: quotesAboutMeBelovedCollection,
};
