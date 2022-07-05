import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
export default {
  ...elementEnLocale,
  buttons: {
    search: 'search',
    add: 'add',
    run: 'run',
    export: 'export',
    edit: 'edit',
    delete: 'delete',
    cancel: 'cancel',
    confirm: 'confirm',
    save: 'save',
    test: 'test',
    save_another: 'save another'
  },
  route: {
    Dashboard: 'Dashboard',
    AlarmManager: 'Alarm Manager',
    DataQuery: 'Data Query',
    DataManager: 'Data Manager',
    AccountManager: 'Account Manager',
    AlarmList: 'Alarm List',
    AlarmEdit: 'Alarm Edit',
    ExecuteLog: 'Execute Log',
    MyMessage: 'My Message',
    MessageTemplate: 'Message Template',
    Service: 'Service',
    DataSource: 'Data Source',
    DataName: 'Data Name',
    Account: 'Account',
    Team: 'Team',
    Department: 'Department'
  },
  login: {
    title: 'Frostmourne Alarm Manager'
  },
  alarm: {
    list: {
      add: 'Add Alarm',
      input_id: 'input id',
      input_name: 'input name, support vague search',
      input_status: 'status',
      input_service: 'choose service',
      input_status_open: 'OPEN',
      input_status_close: 'CLOSE',

      header_alarm_name: 'Name',
      header_alarm_type: 'Alarm Type',
      header_is_open: 'IsOpen',
      header_last_execute_result: 'Last Execute',
      header_last_execute_time: 'Last Execute Time',
      header_owner_object: 'Owner Object',
      header_modifier: 'modifier',
      header_last_modify_time: 'Last Modify Time',
      header_action: 'Action'
    },
    edit: {
      label_basic: 'Basic',
      label_alarm_name: 'Alarm Name',
      label_status_open: 'OPEN',
      label_status_close: 'CLOSE',
      label_service: 'Service',
      label_risk: 'Risk Level',
      label_info: 'info',
      label_important: 'important',
      label_emergency: 'emergency',
      label_crash: 'crash',
      label_owner: 'Owner Object',
      label_owner_placeholder: 'owner object identity',
      label_team: 'Team',
      label_team_placeholder: 'Choose team',
      label_description: 'Description',
      label_data_config: 'Data Config',
      label_data: 'Data',
      label_aggregation_type: 'Aggregation',
      label_pecentile: 'percentile',
      label_percentile_placeholder: 'for example: 90',
      label_aggregation_field: 'Aggregation Field',
      label_bucket_type: 'Bucket Type',
      label_bucket_field: 'Bucket Field',
      label_time_interval: 'Time Interval',
      label_hour: 'hour',
      label_day: 'day',
      label_minute: 'minute',
      label_half_hour: 'half hour',
      label_five_minute: '5 minutes',
      label_week: 'week',
      label_query: 'Query',
      label_http_header: 'HTTP Header',
      label_post_data: 'POST Body',
      label_alarm_rule: 'Alert Rule',
      label_judge_type: 'Judge Type',
      label_number_compare: 'number compare',
      label_javascript_expression: 'Javascript expression',
      label_ring_compare: 'ring compare',
      label_same_time_compare: 'same time compare',
      label_bucket_number_compare: 'bucket number compare',
      label_recent: 'latest',
      label_judge_rule: 'alert rule',
      label_compare_operation: 'compare operation',
      label_threshold: 'threshold',
      label_expression: 'expression',
      label_increase: 'increase',
      label_decrease: 'decrease',
      label_increase_or_decrease: 'increase or decrease',
      label_absolute: 'absolute',
      label_yesterday: 'yesterday',
      label_last_week: 'last week',
      label_last_month: 'last month',
      label_yesterday_and_last_week: 'yesterday and last week',
      label_alert_condition: 'Alert Condition',
      label_message_template: 'Message Template',
      label_message_type: 'message type',
      label_custom_link: 'custom link',
      label_template_content: 'template content',
      label_message_deliver: 'Message Deliver',
      label_message_way: 'message way',
      label_recover_notice: 'recover notice',
      label_dingtalk_robot: 'dingtalk robot',
      label_wechat_robot: 'wechat robot',
      label_http_addr: 'HTTP address',
      label_feishu_robot: 'feishu robot',
      label_silence_time: 'silence time',
      label_silence_rule: 'silence rule',
      label_message_receiver: 'message receiver',
      label_alarm_upgrade: 'Alarm Upgrade',
      label_alarm_upgrade_switch: 'upgrade switch',
      label_upgrade_rule: 'upgrade rule',
      label_schedule_config: 'Schedule Config',
      label_every: 'every',
      label_each_day: 'each day',
      label_cron_expression: 'cron expression',

      text_minutes_metric_value: 'minutes, metric value',
      text_greater_percent: 'greater percent',
      text_and_diff: 'and the difference(current - reference)',
      text_continuous: 'continuous',
      text_times_meet_rule_begin_alert: 'times meet the rule then alert',
      text_import_template: 'import template',
      text_preview_data: 'preview data',
      text_dingding: 'DingTalk',
      text_feishu: 'feishu',
      text_wechat: 'wechat',
      text_sms: 'sms',
      text_continuous_alert: 'continuous alert',
      text_times_then_upgrade: 'times then upgrade',
      text_or: 'or',

      input_service: 'Please choose service',

      title_response_data: 'Response Data'
    },
    alarmLog: {
      label_alarm_id: 'Alarm Id',
      label_execute_time: 'Execute Time',
      label_start_date: 'Start Date',
      label_end_date: 'End Date',
      label_is_alert: 'Alert',
      label_all: 'all',
      label_yes: 'yes',
      label_no: 'no',
      label_execute_result: 'execute result',
      label_success: 'success',
      label_exception: 'exception',
      label_alert_condition: 'Alert Condition'
    }
  },
  dashboard: {
    latest_30_day_alert_count: 'latest 30 days alert count',
    latest_30_day_message_count: 'latest 30 days message count',
    alarm_count: 'Alarms',
    schedule_count: 'Schedule count',
    alert_count: 'Alerts',
    message_count: 'Messages'
  }
}
