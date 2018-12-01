<template>
  <div class="sidebar">
    <div class="subjects">
      <div class="title">
        <img
          v-if="selected.navDepth !== 1"
          src="@/assets/images/icons/backArrowIcon.svg"
          class="back_arrow_icon"
          @click="navigateBack()"
        >
        <h5 v-if="selected.navDepth === 1">
          Subjects
        </h5>
        <h5 v-if="selected.navDepth === 2">
          {{ selected.currentSubject.subject }}
        </h5>
        <h5 v-if="selected.navDepth === 3">
          {{ selected.currentTopic.topic }}
        </h5>
      </div>

      <div v-if="selected.navDepth === 1">
        <div
          v-for="subject in siteStructure.subjects"
          :key="subject.subject"
          class="sub_nav"
          @click="setSubject(subject)"
        >
          <img
            src="@/assets/images/icons/arrowIcon.svg"
            class="arrow_icon"
          >
          <h5>{{ subject.subject }}</h5>
        </div>
      </div>

      <div v-if="selected.navDepth === 2">
        <div
          v-for="topic in selected.currentSubject.topics"
          :key="topic.topic"
          class="sub_nav topic-red"
          @click="setTopic(topic)"
        >
          <nuxt-link :to="topic.link">
            <h5>
              {{ topic.topic }}
            </h5>
          </nuxt-link>
        </div>
      </div>

      <div v-if="selected.navDepth === 2">
        <div
          v-for="topic in selected.currentSubject.topics"
          :key="topic.topic"
          class="sub_nav topic-green"
          @click="setTopic(topic)"
        >
          <nuxt-link :to="topic.link">
            <h5>
              {{ topic.topic }}
            </h5>
          </nuxt-link>
        </div>
      </div>

      <div v-if="selected.navDepth === 2">
        <div
          v-for="topic in selected.currentSubject.topics"
          :key="topic.topic"
          class="sub_nav topic-blue"
          @click="setTopic(topic)"
        >
          <nuxt-link :to="topic.link">
            <h5>
              {{ topic.topic }}
            </h5>
          </nuxt-link>
        </div>
      </div>

      <div v-if="selected.navDepth === 3">
        <div
          v-for="section in selected.currentTopic.contents"
          :key="section"
          class="sub_nav"
        >
          <h5>
            {{ section }}
          </h5>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import json from '~/static/siteStructure.json'
export default {
  name: "TheSidebar",
  data() {
    return {
      siteStructure: json,
    }
  },
  computed: {
    selected: function () {
      return this.$store.state.selected
    }
  },
  methods: {
    setSubject(subject) {
      let selectedState = this.$store.state.selected
      selectedState.currentSubject = subject
      selectedState.navDepth = 2
      this.$store.dispatch('selectedState', selectedState)
    },
    setTopic(topic) {
      let selectedState = this.$store.state.selected
      selectedState.currentTopic = topic
      selectedState.navDepth = 3
      this.$store.dispatch('selectedState', selectedState)
    },
    navigateBack() {
      let selectedState = this.$store.state.selected
      selectedState.navDepth = selectedState.navDepth - 1;
      this.$store.dispatch('selectedState', selectedState)
    }
  }

}
</script>

<style scoped>

.sidebar {
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 250px;
  border-right: 1px solid #e5e5e5;
  background-color: white;
  height: 100%;
  overflow: scroll;
}

.title {
  padding: 10px;
  background-color: rgba(8, 20, 36, 0.84);
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 0px;
}

.title h5 {
  flex: 1 1 auto;
  text-align: center;
}

.sub_nav {
  display: flex;
  flex-flow: row nowrap;
  padding: 6px 10px;
  align-items: center;
}

.sub_nav h5 {
  padding-left: 10px;
}

.sub_nav:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}

.topic {
  border-left: 5px solid #2caaca;
  border-bottom: 1px solid #e5e5e5;
}
.topic-green {
  border-left: 5px solid #27c9b8;
  border-bottom: 1px solid #e5e5e5;
}
.topic-red {
  border-left: 5px solid #ec6d5f;
  border-bottom: 1px solid #e5e5e5;
}

.arrow_icon {
  width: 8px;
}

.back_arrow_icon {
  width: 15px;
}

.back_arrow_icon:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

</style>
