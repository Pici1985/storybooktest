// YourComponent.stories.js
import TestComponent from '../components/TestComponent.vue';
import '../stories/TestComponent.css';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TestComponent',
  component: TestComponent,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { TestComponent },
  props: Object.keys(argTypes),
  template: `<div class="wrapper">
                <h1>This is the component with the title of: {{ title }} </h1>
                <p> SO if I build this in separation from the main project it won't effect anything? </p>
                <p>{{ fieldValue }}</p>
                <input type="text" v-model="fieldValue" placeholder="Write something here">
                <button @click="clicked()"> Click me </button> 
            </div>`,
});

export const FirstStory = Template.bind({});
FirstStory.args = {
  //π The args you need here will depend on your component
  title: "Storybook test",
  fieldValue: '',
  clicked(){
    alert(this.fieldValue)
  },
};