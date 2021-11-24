/* eslint-disable */
import { FlowTypes } from "data-models";
const global: FlowTypes.Global[] = [
  {
    flow_type: "global",
    flow_name: "app_menu_globals",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "user_mode",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "dev_mode_code",
        value: "ParentApp_dev",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "uuid_example",
        value: "fef8eebc2ac1817a",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "uuid_title",
        value: "Your @global.parent_app Code",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/app_menu_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "parent_point_variables",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "parent_points_make_me_smile",
        value: "Make me smile",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "parent_points_get_me_going",
        value: "Get me going",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_relax",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_treat_yourself",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_praise_yourself",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_spend_time",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_praise_teen",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_instruct_positively",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_breathe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "parent_point_count_safe",
        value: 0,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/habit_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "in_week_message_titles",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "m_w_tomorrow",
        value: "New workshop ready tomorrow!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_w_released",
        value: "New workshop!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_w_reminder",
        value: "Workshop Reminder",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_w_in_progress",
        value: "Nice progress!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_praise",
        value: "You are appreciated!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_something_fun",
        value: "Something Fun",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_parent_points_overview",
        value: "Your @global.parent_points this week",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "m_hp_reminder",
        value: "Home Practice Reminder",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/in_week_message_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "hp_review_phrases",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "to_solve_hp_challenge",
        value: "To solve this challenge, I will try to:",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "try_this_hp_challenge",
        value: "Do you want to try one of the following things?",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "challenge_not_here",
        value: "My challenge is not listed here.",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/in_week_message_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "names_of_characters",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "female_adult_name_1",
        value: "Thandie",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_adult_name_2",
        value: "Lindiwe",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_adult_name_3",
        value: "Nontlantla",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_adult_name_4",
        value: "Zanele",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_1",
        value: "Khwezi",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_2",
        value: "Thuli",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_3",
        value: "Asive",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_4",
        value: "Zama",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_5",
        value: "Nombuso",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_child_name_6",
        value: "Karabo",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_caregiver_1",
        value: "Gogo",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "female_caregiver_2",
        value: "Mother",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "female_caregiver_3",
        value: "Mother",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "female_caregiver_4",
        value: "Mother",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "male_adult_name_1",
        value: "Thabo",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_child_name_1",
        value: "Alex",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_child_name_2",
        value: "Sabelo",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_child_name_3",
        value: "Rudzani",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_child_name_4",
        value: "Lonwabo",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_child_name_5",
        value: "Pule",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "male_caregiver_1",
        value: "Father",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "male_caregiver_2",
        value: "Father",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "male_caregiver_3",
        value: "Mkhulu",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "guide_1_name",
        value: "@global.male_adult_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "guide_2_name",
        value: "@global.female_adult_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "guide_teen_name",
        value: "@global.male_child_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_praise_female_caregiver_name",
        value: "@global.female_adult_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_praise_girl",
        value: "@global.female_child_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_praise_teen_girl",
        value: "@global.female_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_instruct_teen_girl",
        value: "@global.female_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_instruct_female_caregiver",
        value: "@global.female_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_teen_boy_1",
        value: "@global.male_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_girl",
        value: "@global.female_child_name_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_male_caregiver",
        value: "@global.male_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_female_caregiver",
        value: "@global.female_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_teen_girl",
        value: "@global.female_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_teen_boy_2",
        value: "@global.male_child_name_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_stress_parent",
        value: "@global.male_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_rules_teen_boy",
        value: "@global.male_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_rules_female_caregiver_1",
        value: "@global.female_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_rules_teen_girl",
        value: "@global.female_child_name_6",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_rules_female_caregiver_2",
        value: "@global.female_caregiver_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_teen_boy_1",
        value: "@global.male_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_teen_boy_2",
        value: "@global.male_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_teen_girl_1",
        value: "@global.female_child_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_teen_girl_2",
        value: "@global.female_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_male_caregiver",
        value: "@global.male_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_female_caregiver",
        value: "@global.female_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_money_grandma",
        value: "@global.female_caregiver_1 @global.female_adult_name_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_money_teen_girl",
        value: "@global.female_child_name_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_money_teen_boy",
        value: "@global.male_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_female_caregiver_1",
        value: "@global.female_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_female_caregiver_1_name",
        value: "@global.female_adult_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_teen_girl",
        value: "@global.female_child_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_teen_boy_1",
        value: "@global.male_child_name_5",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_female_caregiver_2",
        value: "@global.female_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_solve_teen_boy_2",
        value: "@global.male_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_safe_teen_girl_1",
        value: "@global.female_child_name_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_safe_teen_girl_2",
        value: "@global.female_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_safe_teen_girl_3",
        value: "@global.female_child_name_5",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_safe_female_caregiver",
        value: "@global.female_caregiver_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_teen_girl_1",
        value: "@global.female_child_name_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_adult_friend",
        value: "@global.female_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_female_caregiver",
        value: "@global.female_caregiver_1",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_teen_boy_1",
        value: "@global.male_child_name_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_teen_boy_2",
        value: "@global.male_child_name_4",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_male_caregiver_1",
        value: "@global.male_caregiver_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_male_caregiver_2",
        value: "@global.male_caregiver_3",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/localisation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "localisation_options",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "teen_social_medium",
        value: "TikTok",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "data_warning_video",
        value:
          "Watching this video requires internet access. To limit data use, watch or download this video when on WiFi.",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "data_warning_websites",
        value:
          "Visiting these websites requires internet access. To limit data use, visit these websites when on WiFi.",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "data_warning_send_message",
        value:
          "Sending this message requires internet access. To limit data use, send this message when on WiFi.",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "currency",
        value: "R",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "monthly_income_estimate",
        value: 3000,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "monthly_income_precise",
        value: 3400,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "number_of_beans",
        value: 20,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "teen_age_bracket",
        value: "10-17",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "adult_age_bracket",
        value: "18+",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/localisation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "organisation_list",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "amathuba",
        value: "Amathuba Collective",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "dlalanathi",
        value: "Dlalanathi",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "hillcrest",
        value: "Hillcrest AIDS Centre Trust",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "hpccc",
        value: "HPCCC",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "seven_passes",
        value: "Seven Passes Initiative",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "zlto",
        value: "Zlto",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/localisation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "home_screen_variables",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "parent_app",
        value: "ParentApp",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "weekly_workshops",
        value: "Weekly Workshops",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "weekly_workshop",
        value: "Weekly Workshop",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "weekly_workshop_options",
        value: "Weekly Workshop Options",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "parent_points",
        value: "ParentPoints",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "parent_point",
        value: "ParentPoint",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "parent_centre",
        value: "Parent Library",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "workshops_setup",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "no_mail",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "daily_relax_done",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "in_week_messages",
        value: "In-Week Messages",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/navigation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "button_texts",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "ideas_button",
        value: "Real-world ideas",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "ideas_short_button",
        value: "Ideas",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "ideas_pop_up",
        value: "Ideas from other families...",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "challenges_solutions_button",
        value: "Challenges & solutions",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "submit_button",
        value: "Submit",
        _translations: {
          value: {
            tz_sw: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "more",
        value: "Find out more",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "show_me_how",
        value: "Show me how",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "tell_me_more",
        value: "Tell me more!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "lets_go",
        value: "Let's go!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "check_it_out",
        value: "Check it out!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "done",
        value: "Done",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "next",
        value: "Next",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "back",
        value: "Previous",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "save",
        value: "Save",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "start",
        value: "Start",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "skip",
        value: "Skip",
        _translations: {
          value: {
            tz_sw: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "finish_with_song",
        value: "Finish with a song",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "goodbye",
        value: "Goodbye!",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "more_button",
        value: "**@global.more**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "show_me_how_button",
        value: "**@global.show_me_how**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "tell_me_more_button",
        value: "**@global.tell_me_more**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "lets_go_button",
        value: "**@global.lets_go**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "check_it_out_button",
        value: "**@global.check_it_out**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "done_button",
        value: "**@global.done**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "next_button",
        value: "**@global.next**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "back_button",
        value: "**@global.back**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "save_button",
        value: "**@global.save**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "finish_with_song_button",
        value: "**@global.finish_with_song**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "goodbye_button",
        value: "**@global.goodbye**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "start_button",
        value: "**@global.start**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "skip_button",
        value: "**@global.skip**",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/navigation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "click_count_defaults",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_self_care",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_1on1",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_praise",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_instruct",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_stress",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_money",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_rules",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_consequence",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_solve",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_safe",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_crisis",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_count_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_weekly_workshops_quick_start_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_points_quick_start_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_hs_parent_centre_quick_start_w_celebrate",
        value: 0,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/navigation_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "relax_variables",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "my_relaxes",
        value: "My Favourite Relaxes",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "all_relaxes",
        value: "All Relaxes",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "random_relax",
        value: "Random Relax",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "current_relax",
        value: "This Week's Relax",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "relax_passive_short",
        value: "Listen & Relax (1-2 minutes)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "relax_passive_long",
        value: "Listen & Relax (3-5 minutes)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "relax_active",
        value: "Do & Relax (5-10 minutes)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "relax_1_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_2_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_3_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_4_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_5_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_6_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_7_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_8_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_9_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_10_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_11_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_12_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_13_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_14_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_15_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_16_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_17_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_18_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_19_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_20_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_21_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_22_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_23_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "relax_24_favourite",
        value: false,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/parent_centre_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "activity_variables",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "my_activities",
        value: "My Favourite Activities",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "all_activities",
        value: "All Activities",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "random_activity",
        value: "Random Activity",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "current_activity",
        value: "This Week's Activity",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "chat_together",
        value: "Chat Together",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "do_together",
        value: "Do Together",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "activity_reflect_positive_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_check_in_chat_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_dream_travel_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_famous_party_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_two_truths_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_time_machine_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_superpowers_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_friendly_chat_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_interrupter_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_three_options_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_yes_no_maybe_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_memory_game_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_invent_story_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_co_chef_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_dance_moves_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_mirror_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_praise_time_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_whats_new_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_get_active_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_name_that_tune_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_pass_the_snap_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_family_workout_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_housework_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_doing_what_favourite",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "activity_crazy_chicken_favourite",
        value: false,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/parent_centre_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "pc_click_count_defaults",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "click_pc_my_tips_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_essential_tools_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_covid_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_customisation_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_relax_and_activities_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_help_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_support_contacts_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_evidence_base_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_message_archive_count",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "click_pc_technical_support_count",
        value: 0,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/parent_centre_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "1on1",
    flow_name: "spend_time_ideas",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "spend_time_idea_1",
        value: "Walk to the shops",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_2",
        value: "Get water together",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_3",
        value: "Do a chore together",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_4",
        value: "Prepare dinner",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_5",
        value: "Eat breakfast/lunch/dinner",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_6",
        value: "Have tea after school",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_7",
        value: "Watch a T.V. show",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_8",
        value: "Review homework",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_9",
        value: "Chat before bedtime",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "spend_time_idea_10",
        value: "Play a game/sport",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "money",
    flow_name: "saving_goals",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "saving_goal_1",
        value: "Teens completing school/university",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "saving_goal_2",
        value: "Building/expanding a house for my family",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "saving_goal_3",
        value: "Starting a business",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "saving_goal_4",
        value: "Buying a car for my family",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "money",
    flow_name: "financial_emergencies",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "financial_emergency_1",
        value: "Severe illness or death of a friend or family member",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "financial_emergency_2",
        value: "Robbery",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "financial_emergency_3",
        value: "Flooding",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "financial_emergency_4",
        value: "Political violence",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "financial_emergency_5",
        value: "Losing my job",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "financial_emergency_6",
        value: "Pandemic (COVID-19)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "money",
    flow_name: "savings_options",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "savings_option_1",
        value: "At home",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "savings_option_2",
        value: "Buy things we can sell",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "savings_option_3",
        value: "At a bank",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "savings_option_4",
        value: "In a savings group",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "consequence",
    flow_name: "consequences",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "negative_consequence_1",
        value: "No gadget use the next day",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "negative_consequence_2",
        value: "Take 5 minutes pause in separate part of the room",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "negative_consequence_3",
        value: "Write a letter of apology",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "negative_consequence_4",
        value: "Cannot see friends the next day",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "negative_consequence_5",
        value: "Cannot play with phone after dinner (or next hour)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "positive_consequence_1",
        value: "Extra time with friends on weekend (1hr)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "positive_consequence_2",
        value: "Cooking teen’s favourite meal",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "positive_consequence_3",
        value: "Extra time with phone after dinner (30 min)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "positive_consequence_4",
        value: "Watching teen’s T.V. show together",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "positive_consequence_5",
        value: "Extra one-on-one time on Sunday (30 min)",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    module: "crisis",
    flow_name: "crisis_skills",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "crisis_skill_1",
        value: "Take a deep breath and pause before responding",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "crisis_skill_2",
        value: "Listen to your teen",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "crisis_skill_3",
        value: "Praise your teen for sharing",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "crisis_skill_4",
        value: "Use problem solving skills",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "crisis_skill_5",
        value: "Work out where you can get help",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/suggestion_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "survey_completed",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "survey_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "survey_welcome_started",
        value: false,
      },
      {
        type: "declare_field_default",
        name: "survey_welcome_completed",
        value: false,
      },
      {
        type: "declare_field_default",
        name: "survey_final_started",
        value: false,
      },
      {
        type: "declare_field_default",
        name: "survey_final_completed",
        value: false,
      },
      {
        type: "declare_global_constant",
        name: "tap_and_type",
        value: "Tap and type",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "tap_and_choose",
        value: "Tap and choose",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "type_your_own",
        value: "Type your own",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "dont_show_again",
        value: "I've understood this. Don't show me this message again.",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/survey_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "thresholds",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_1",
        value: 4,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_2",
        value: 5,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_3",
        value: 2,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_4",
        value: 2,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_5",
        value: 1,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_6",
        value: 1,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_7",
        value: 7,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_8",
        value: 5,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_welcome_t_9",
        value: 7,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_1",
        value: 4,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_2",
        value: 5,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_3",
        value: 2,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_4",
        value: 2,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_5",
        value: 1,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_6",
        value: 1,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_7",
        value: 7,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_8",
        value: 5,
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "survey_t_9",
        value: 7,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/survey_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "workshop_titles",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "w_self_care",
        value: "Welcome and Self-Care",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_self_care_only",
        value: "Self-Care",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_self_care_tools",
        value: "How to add self-care",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_1on1",
        value: "One-on-One Time",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_1on1_tools",
        value: "How to spend one-on-one time",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_praise",
        value: "Praise",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_praise_tools",
        value: "How to praise",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_instruct",
        value: "Positive Instructions",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_instruct_tools",
        value: "How to give positive instructions",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_stress",
        value: "Managing Stress",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_stress_tools",
        value: "How to manage stress",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_money",
        value: "Family Budgets",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_money_tools",
        value: "How to budget & save",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_rules",
        value: "Rules",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_rules_tools",
        value: "How to create rules",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_consequence",
        value: "Calm Consequences",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_consequence_tools",
        value: "How to give calm consequences",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_solve",
        value: "Problem Solving",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_solve_tools",
        value: "How to solve problems",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_safe",
        value: "Teen Safety",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_safe_tools",
        value: "How to keep your teen safe",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_crisis",
        value: "Dealing with Crisis",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_crisis_tools",
        value: "How to deal with crisis",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_celebrate",
        value: "Celebration and Next Steps",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "w_celebrate_tools",
        value: "How to support each other",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/workshop_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "workshop_modes",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "home_practice",
        value: "Home Practice",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "home_practice_problem_solving",
        value: "Talk about @global.home_practice",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "hp_review",
        value: "Home Practice Review",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/workshop_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "workshop_completion_levels",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "w_self_care_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_completion_level",
        value: 0,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_self_care_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_started",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_self_care_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_self_care_disabled",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_self_care_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_hp_review_completed",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_self_care_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_1on1_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_praise_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_instruct_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_stress_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_rules_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_consequence_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_solve_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_crisis_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_celebrate_tools_disabled",
        value: true,
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/workshop_globals.xlsx",
  },
  {
    flow_type: "global",
    flow_name: "workshop_options",
    status: "released",
    rows: [
      {
        type: "declare_field_default",
        name: "do_workshops_together",
        value: false,
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "workshop_path",
        value: "individual",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "together",
        value: "In my group",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_global_constant",
        name: "individual",
        value: "By myself",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "guide_number",
        value: "guide_2",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "user_name_default",
        value: "awesome parent",
        _translations: {
          value: {
            es_sp: true,
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "user_name",
        value: "@global.user_name_default",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "group_name_default",
        value: "friends",
        _translations: {
          value: {
            tz_sw: true,
            za_af: true,
            za_tn: true,
            za_xh: true,
            za_zu: true,
          },
        },
      },
      {
        type: "declare_field_default",
        name: "group_name",
        value: "@global.group_name_default",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_money_path",
        value: "alone",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_field_default",
        name: "w_safe_path",
        value: "alone",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "plh_sheets_beta/plh_templating/data/workshop_globals.xlsx",
  },
];
export default global;