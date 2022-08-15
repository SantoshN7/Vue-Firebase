<template>
  <h4>{{course.name}}</h4>
    <div class="skills-section">
      <span class="skill-heading">Skills to learn</span>
      <ul class="skills-list">
        <li v-for="skill in course.skills">{{skill}}</li>
      </ul>
    </div>
    <div class="action-group">
      <button type="button" class="btn btn-primary">Register</button>
    </div>
</template>

<script>
export default {
  props: ['course']
}
</script>

<style>
  .skills-section {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .skill-heading {
    font-weight: 600;
    width: 30%;
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    width: 70%;
    list-style: none;
    line-height: 1.5em;
    align-items: flex-start;
  }

  .action-group {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    align-items: flex-start;
  }
</style>