import { z, defineCollection } from 'astro:content';

const multipleChoiceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        choices: z.array(z.string()),
        valid: z.array(z.string()),
    })
});

const singleChoiceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        choices: z.array(z.string()),
        valid: z.string(),
    })
});

const yesNoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        statement: z.string(),
        bool: z.boolean(),
    })
});

export const collections = {
    'multipleChoice': multipleChoiceCollection,
    'singleChoiceCollection': singleChoiceCollection,
    'yesNoCollectionm': yesNoCollection,
};