import { defineComponent, h } from 'vue';

export const SettingsCog2 = defineComponent({
  name: 'SettingsCog2',
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
        h('path', {"d": "M18 2h2v2h-2zM4 2h2v2H4zm16 20h-2v-2h2zM4 22h2v-2H4zM20 4h2v2h-2zM6 4h4v2H6zm12 16h-4v-2h4zM6 20h4v-2H6zM18 6h2v4h-2zM4 6h2v4H4zm16 12h-2v-4h2zM4 18h2v-4H4zM14 4h4v2h-4zM2 4h2v2H2zm20 16h-2v-2h2zM2 20h2v-2H2z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 2h2v4H8zm0 20h2v-4H8z", "fillRule": "evenodd"}),
        h('path', {"d": "M8 2h8v2H8zm0 20h8v-2H8zM2 8h2v8H2zm20 8h-2V8h2z", "fillRule": "evenodd"}),
        h('path', {"d": "M20 8h2v4h-2zM10 8h4v2h-4zm-2 2h2v4H8zm2 4h4v2h-4zm4-4h2v4h-2z", "fillRule": "evenodd"})
      ]
    );
  }
});
