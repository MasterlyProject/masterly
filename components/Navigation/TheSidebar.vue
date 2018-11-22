<template>
<div class="sidebar">
  <div class="title">
    <img
      v-if="selected.navDepth !== 1"
      @click="navigateBack()"
      src="@/assets/images/backArrowIcon.svg"
      class="back_arrow_icon"/>
    <p v-if="selected.navDepth === 1">
      Subjects
    </p>
    <p v-if="selected.navDepth === 2">
      {{ selected.currentSubject.subject }}
    </p>
    <p v-if="selected.navDepth === 3">
      {{ selected.currentTopic.topic }}
    </p>
  </div>
  <div
    v-if="selected.navDepth === 1"
    v-for="subject in siteStructure.subjects"
    :key="subject.subject"
    @click="setSubject(subject)"
    class="sub_nav">
    <img
      src="@/assets/images/arrowIcon.svg"
      class="arrow_icon"/>
    <p>
      {{ subject.subject }}
    </p>
  </div>
  <div
    v-if="selected.navDepth === 2"
    v-for="topic in selected.currentSubject.topics"
    :key="topic.topic"
    @click="setTopic(topic)"
    class="sub_nav">
    <nuxt-link :to='topic.link'>
      <img
        src="@/assets/images/arrowIcon.svg"
        class="arrow_icon"/>
      <p>
      {{ topic.topic }}
      </p>
    </nuxt-link>
  </div>
  <div
    v-if="selected.navDepth === 3"
    v-for="section in selected.currentTopic.contents"
    :key="section"
    class="sub_nav">
    <p>
      {{ section }}
    </p>
  </div>
</div>
</template>

<script>
import json from '~/static/siteStructure.json'
export default {
  name: "TheSidebar",
  data() {
    return {
      selected:
        {
          navDepth: 1,
          currentSubject: "",
          currentTopic: ""
        },
      siteStructure: json,
    }
  },
  methods: {
    setSubject(subject) {
      this.selected.currentSubject = subject
      this.selected.navDepth = 2
    },
    setTopic(topic) {
      this.selected.currentTopic = topic
      this.selected.navDepth = 3
    },
    navigateBack() {
      this.selected.navDepth = this.selected.navDepth - 1;
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
  margin-bottom: 6px;
}

.title p {
  flex: 1 1 auto;
  text-align: center;
}

.sub_nav {
  display: flex;
  flex-flow: row nowrap;
  padding: 6px 10px;
  align-items: center;
}

.sub_nav p {
  padding-left: 10px;
}

.sub_nav:hover {
  background-color: #f4f5f7;
  cursor: pointer;
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
