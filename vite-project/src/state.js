import { reactive } from 'vue'

export const state = reactive({

    navBar: [
        {
            name: "home"
        },
        {
            name: "about"
        },
        {
            name: "services"
        },
        {
            name: "princing"
        },
        {
            name: "blog"
        },
        {
            name: "read more"
        },
    ],

    cardFooter: [{
        about: [
            {
                name: "The Company"
            },
            {
                name: "Institutional"
            },
            {
                name: "Social & Events"
            },
            {
                name: "Innovation"
            },
            {
                name: "Environment"
            },
            {
                name: "Technology"
            },
        ],
    },
    {
        service: [
            {
                name: "Audit & Assurance"
            },
            {
                name: "Financial Advisory"
            },
            {
                name: "Analytics M&A"
            },
            {
                name: "Middle Marketing"
            },
            {
                name: "Legal Consulting"
            },
            {
                name: "Regulatory Risk"
            },
        ],
    },
    {
        support: [
            {
                name: "Responsibility"
            },
            {
                name: "Terms of Use"
            },
            {
                name: "About Cookies"
            },
            {
                name: "Privacy Policy"
            },
            {
                name: "Accessibilitity"
            },
            {
                name: "Information"
            },
        ]
    }
    ]
})