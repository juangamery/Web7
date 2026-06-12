import { defineComponent, h } from 'vue';

export const SectionX = defineComponent({
  name: 'SectionX',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        width: '24px', height: '24px',
        class: `pixelart-icons-font ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "M5 21H3v-2h2v2Zm4 0H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM5 17H3v-2h2v2Zm12 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM5 13H3v-2h2v2Zm16 0h-2v-2h2v2ZM5 9H3V7h2v2Zm16 0h-2V7h2v2ZM5 5H3V3h2v2Zm4 0H7V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Z", "fillRule": "evenodd"})
      ]
    );
  }
});
