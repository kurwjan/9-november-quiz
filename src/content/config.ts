import { z, defineCollection } from 'astro:content';

const multipleChoiceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        subject: z.string(),
        choices: z.array(z.string()),
        reasons: z.array(z.string()),
        valid: z.array(z.string()),
        id: z.string(),
        image: z.string(),
    })
});

const singleChoiceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        subject: z.string(),
        choices: z.array(z.string()),
        reasons: z.array(z.string()),
        valid: z.string(),
        id: z.string(),
        image: z.string(),
    })
});

const yesNoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        statement: z.string(),
        bool: z.boolean(),
    })
});

const imageCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        short: z.string(),
        original: z.string(),
        image: z.string(),
    })
})

const configCollection = defineCollection({
    type: 'content',
    schema: z.object({
        page_list: z.array(z.object({
            "type": z.string(),
            "id": z.string(),
        }))
    })
})

export const collections = {
    'multiple_choice': multipleChoiceCollection,
    'single_choice': singleChoiceCollection,
    'yes_no': yesNoCollection,
    'config': configCollection,
    'images': imageCollection,
};