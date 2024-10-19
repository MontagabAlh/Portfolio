import { defineField, defineType } from "sanity";

export default defineType({
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        defineField({
            name: 'tilte',
            type: 'string',
            title: 'Tilte',
            validation: (Rule) => [Rule.required().min(3).max(100)]
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule) => [Rule.required().min(3).max(1000)],
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'URL',
            validation: Rule => Rule.custom(url => {
                if (typeof url === 'undefined') {
                    return true
                }

                return url.toLowerCase()
                    .match(
                        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
                    )
                    ? true
                    : 'This is not an url'
            }),
        }),
        defineField({
            name: 'github',
            type: 'url',
            title: 'GitHub Repository Link',
            validation: Rule => Rule.custom(url => {
                if (typeof url === 'undefined') {
                    return true
                }

                return url.toLowerCase()
                    .match(
                        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
                    )
                    ? true
                    : 'This is not an url'
            }),
        }),
        defineField({
            name: 'publishedat',
            type: 'date',
            title: 'Published At',
            validation:(Rule)=> Rule.min(new Date("2020-08-25").toDateString()).max(new Date().toDateString())
        }),
        defineField({
            name: 'isresponsive',
            type: 'boolean',
            title: 'Is Responsive',
            initialValue: true
        }),
    ]
})