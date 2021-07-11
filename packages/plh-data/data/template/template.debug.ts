/* eslint-disable */
import { FlowTypes } from "../../model/flowTypes";
const template: FlowTypes.Template[] = [
  {
    flow_type: "template",
    flow_name: "debug_advanced_dashed_box_1",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "advanced_dashed_box",
        name: "dashed_box_test",
        exclude_from_translation: true,
        rows: [
          {
            type: "subtitle",
            value:
              "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            parameter_list: {
              style: "emphasised center",
            },
            exclude_from_translation: true,
            name: "subtitle",
            _nested_name: "dashed_box_test.subtitle",
          },
          {
            type: "display_group",
            name: "display_group",
            exclude_from_translation: true,
            rows: [
              {
                type: "button",
                value: "test",
                exclude_from_translation: true,
                name: "button",
                _nested_name: "dashed_box_test.display_group.button",
              },
            ],
            _nested_name: "dashed_box_test.display_group",
          },
        ],
        _nested_name: "dashed_box_test",
      },
      {
        exclude_from_translation: true,
        type: "set_variable",
        name: "set_variable",
        _nested_name: "set_variable",
      },
      {
        exclude_from_translation: true,
        type: "set_variable",
        name: "set_variable",
        _nested_name: "set_variable",
      },
      {
        type: "display_group",
        name: "display_group",
        parameter_list: {
          style: "dashed_box",
        },
        exclude_from_translation: true,
        rows: [
          {
            type: "subtitle",
            value: "Every time you do a relax, tap the ParentPoint and celebrate your success!",
            parameter_list: {
              style: "emphasised center",
              text_align: "center",
            },
            exclude_from_translation: true,
            name: "subtitle",
            _nested_name: "display_group.subtitle",
          },
          {
            type: "parent_point_box",
            name: "points_example_1",
            value: 3,
            parameter_list: {
              lottie_src: "lottie_animations/parent_centre.json",
              text: "text two",
            },
            exclude_from_translation: true,
            _nested_name: "display_group.points_example_1",
          },
        ],
        _nested_name: "display_group",
      },
      {
        exclude_from_translation: true,
        type: "set_variable",
        name: "set_variable",
        _nested_name: "set_variable",
      },
      {
        type: "display_group",
        name: "display_group",
        parameter_list: {
          style: "dashed_box",
        },
        exclude_from_translation: true,
        rows: [
          {
            type: "subtitle",
            value: "small text here",
            parameter_list: {
              style: "emphasised center",
            },
            exclude_from_translation: true,
            name: "subtitle",
            _nested_name: "display_group.subtitle",
          },
          {
            type: "parent_point_box",
            name: "points_example_1",
            value: 3,
            parameter_list: {
              lottie_src: "lottie_animations/parent_centre.json",
              text: "text two",
            },
            exclude_from_translation: true,
            _nested_name: "display_group.points_example_1",
          },
        ],
        _nested_name: "display_group",
      },
      {
        type: "display_group",
        name: "display_group",
        exclude_from_translation: true,
        rows: [
          {
            type: "subtitle",
            value: "Every time you do a relax, tap the ParentPoint and celebrate your success!",
            parameter_list: {
              style: "emphasised center",
              text_align: "center",
            },
            exclude_from_translation: true,
            name: "subtitle",
            _nested_name: "display_group.subtitle",
          },
          {
            type: "parent_point_box",
            name: "points_example_1",
            value: 3,
            parameter_list: {
              lottie_src: "lottie_animations/parent_centre.json",
              text: "text two",
            },
            exclude_from_translation: true,
            _nested_name: "display_group.points_example_1",
          },
        ],
        _nested_name: "display_group",
      },
    ],
    _xlsxPath:
      "plh_sheets_beta/plh_templating/quality_assurance/debug_templates/debug_advanced_dashed_box.xlsx",
  },
  {
    flow_type: "template",
    flow_name: "debug_advanced_dashed_box_2",
    status: "released",
    flow_subtype: "debug",
    rows: [
      {
        type: "advanced_dashed_box",
        name: "dashed_box",
        exclude_from_translation: true,
        rows: [],
        _nested_name: "dashed_box",
      },
    ],
    _xlsxPath:
      "plh_sheets_beta/plh_templating/quality_assurance/debug_templates/debug_advanced_dashed_box.xlsx",
  },
];
export default template;
