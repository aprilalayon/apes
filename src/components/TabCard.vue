<template>
    <div v-for="tab in tabData" :key="tab.id">
        <ul class="tabs__header">
            <li>
                <button 
                :class="selectedIndex === tab.id ? 'active' : ''"
                @click="selectTab(tab.id)">
                    {{ tab.company }}
                </button>
            </li>
        </ul>
        
        <TabPanel v-show="selectedIndex === tab.id" :class="selectedIndex === tab.id ? 'active' : ''">
            <h3>{{ tab.company }}</h3>
            <p>{{ tab.role }}</p>
            <p>{{ tab.range }}</p>
            <p v-for="item in tab.description">
                {{ item }}
            </p>
        </TabPanel>
    
    </div>
</template>

<script>
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
            selectedIndex: 0, // the index of the selected tab,
            tabData: [
                {
                    id: "newmode",
                    company: "New/Mode",
                    role: "Front End Developer",
                    range: "2019-2022",
                    description: [
                        "I did x",
                        "I did 2",
                        "I did three",
                    ]
                },
                {
                    id: "freelance",
                    company: "Freelance",
                    role: "Visual Graphic Artist",
                    range: "2012-2020",
                    description: [
                        "I did many of these",
                        "I did lots of these",
                        "I did three times of these",
                    ]
                },
            ]
        }
            
    },

    methods: {
        selectTab(i) {
            const data = this.tabData;
            this.selectedIndex = i;

            data.forEach((item, index) => {
                item.isActive = (item.id === i);
            })
            
        }
    }
};

</script>

<style>
</style>
