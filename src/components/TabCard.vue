<template>
    <div class="tabs__wrapper">
        <ul class="tab__header" :class="orientation == 'vertical' ? 'vertical' : 'horizontal'">
            <li v-for="tab in tabData" :key="tab.id">
                <button 
                    :class="selected === tab.id ? 'active' : ''"
                    @click="selectTab(tab.id)"
                >
                    {{ tab.company }}
                </button>
            </li>
        </ul>
        <TabPanel 
            v-for="tab in tabData" :key="tab.id" class="tab__panel--wrapper" 
            v-show="selected === tab.id" :class="selected === tab.id ? 'active' : ''"
        >
            <p class="role">{{ tab.role }}</p>
            <p class="company">@ {{ tab.company }}</p>
            <p class="range">{{ tab.range }}</p>
            <li v-for="item in tab.experience" class="experience">
                {{ item }}
            </li>

            <div class="panel--role_2" v-show="tab.role_2">
                <p class="role_2">{{ tab.role_2 }}</p>
                <p class="range_2">{{ tab.range_2 }}</p>
                <li v-for="item in tab.experience_2" class="experience_2">
                    {{ item }}
                </li>
            </div>
        </TabPanel>
    </div>
</template>

<script>
import "@/assets/styles/_tabs.scss";
import TabPanel from './TabPanel.vue';

export default {
    name: "TabCard",
    components: { TabPanel },
    props: {
        orientation: {
            type: String,
            default: () => "vertical",
            validator: (value) => ["horizontal", "vertical"].includes(value),
        },
    },
    data() {
        return {
            selected: 'newmode', // the index of the selected tab,
            tabData: [
                {
                    id: "newmode",
                    company: "New/Mode",
                    role: "Front End Developer",
                    range: "Mar 2018 - Oct 2022",
                    experience: [
                        "Centralized modern components by building a design system using Storybook. This standardized development and design processes of the whole organization.",
                        "Developed modular components and reusable code for the improved product using modern front end frameworks and workflows like Vue, SASS, Javascript, Storybook and Chromatic",
                        "Researched and explored strategies for appropriate modern front end framework for the product's future scalability and maintenance",
                        "Collaborated with clients to create themes within our product to match the client's branding using PHP, Drupal and CSS",
                    ],
                    role_2: "Front End Designer",
                    range_2: "Apr 2021 - Jan 2022",
                    experience_2: [
                        "Conducted user research and usability testing to improve the quality of the product and to find the weakest areas of the product",
                        "Collaborated and worked closely with the product, data and engineering teams to design and improve user flow and experience using design and prototyping tools like Balsamiq, Invision, Adobe XD and Figma",
                        "Audited the legacy version of a web application and made recommendations to reduce confusing UI elements and improve critical UI elements that encourages faster campaign creation",
                    ]
                },
                {
                    id: "freelance",
                    company: "Freelance",
                    role: "WordPress Developer",
                    range: "Aug 2017 - Dec 2019",
                    experience: [
                        "Developed websites for local small businesses using WordPress, PHP, SASS, jQuery and Javascript",
                        "Designed themes and user experience for WordPress sites to match the client's branding and styles"
                    ],
                    role_2: "Visual Graphic Artist",
                    range_2: "2012 - Dec 2020",
                    experience_2: [
                        "Collaborated with both online and print publications, magazines, writers and local businesses in creating brand identity, illustrations, data visualization, advertising and other marketing collateral for their projects and business needs.",
                    ]
                },
                {
                    id: "apple",
                    company: "Apple",
                    role: "Operations Specialist",
                    range: "Dec 2014 - Feb 2018",
                    experience: [
                    "Generated business leads and led briefings to tackle workflow challenges of clients",
                    "Assisted and provided solutions to clients from troubleshooting technical problems to purchasing the right products for their needs.",
                    ],
                },
                {
                    id: "designer",
                    company: "Yulu",
                    role: "Graphic Designer",
                    range: "May 2016 - Dec 2016",
                    experience: [
                        "Oversaw multiple and simultaneous graphic design projects for BCorp companies and other socially conscious businesses",
                        "Maintained Yulu's website using WordPress tools",
                        "Created social media assets for company events, website and other social media presence"
                    ],
                }
            ]
        }
            
    },
    methods: {
        selectTab(i) {
            const data = this.tabData;
            this.selected = i;

            data.forEach((item, index) => {
                item.isActive = (item.id === i);
            })
            
        }
    }
};

</script>
