import { SVGProps } from 'react';
import * as Icons from '../components';

export const iconNames = [
  'ri-account-circle-fill',
  'ri-account-circle-line',
  'ri-add-circle-fill',
  'ri-add-circle-line',
  'ri-add',
  'ri-alarm-warning-fill',
  'ri-alarm-warning-line',
  'ri-arrow-down-fill',
  'ri-arrow-down-line',
  'ri-arrow-go-back-fill',
  'ri-arrow-go-back-line',
  'ri-arrow-go-forward-fill',
  'ri-arrow-go-forward-line',
  'ri-arrow-left-fill',
  'ri-arrow-left-line',
  'ri-arrow-left-right-fill',
  'ri-arrow-left-right-line',
  'ri-arrow-m-down-fill',
  'ri-arrow-m-down-line',
  'ri-arrow-m-left-fill',
  'ri-arrow-m-left-line',
  'ri-arrow-m-right-fill',
  'ri-arrow-m-right-line',
  'ri-arrow-m-up-fill',
  'ri-arrow-m-up-line',
  'ri-arrow-right-fill',
  'ri-arrow-right-line',
  'ri-arrow-up-down-fill',
  'ri-arrow-up-down-line',
  'ri-arrow-up-fill',
  'ri-arrow-up-line',
  'ri-arrow-xs-down-fill',
  'ri-arrow-xs-up-fill',
  'ri-briefcase-fill',
  'ri-briefcase-line',
  'ri-calendar-event-fill',
  'ri-calendar-event-line',
  'ri-calendar-fill',
  'ri-calendar-line',
  'ri-check',
  'ri-checkbox-circle-fill',
  'ri-checkbox-fill',
  'ri-checkbox-indeterminate-fill',
  'ri-checkbox-indeterminate-line',
  'ri-checkbox-line',
  'ri-close-circle-fill',
  'ri-close-circle-line',
  'ri-close',
  'ri-coins-line',
  'ri-delete-bin-fill',
  'ri-delete-bin-line',
  'ri-error-warning-fill',
  'ri-error-warning-line',
  'ri-external-link-line',
  'ri-facebook-circle-line',
  'ri-information-fill',
  'ri-information-line',
  'ri-instagram-line',
  'ri-linkedIn-line',
  'ri-loader',
  'ri-map-fill',
  'ri-map-line',
  'ri-message-fill',
  'ri-message-line',
  'ri-minus',
  'ri-pencil-fill',
  'ri-pencil-line',
  'ri-question-fill',
  'ri-question-line',
  'ri-reply-fill',
  'ri-reply-line',
  'ri-search',
  'ri-send-plane-fill',
  'ri-send-plane-line',
  'ri-settings-fill',
  'ri-settings-line',
  'ri-timer3-fill',
  'ri-timer3-line',
  'ri-twitter-line',
] as const;

export type IconNames = typeof iconNames[number];
type SVGComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const iconsMappingComponent: { [name in IconNames]: SVGComponent } = {
  ['ri-account-circle-fill']: Icons.RiAccountCircleFill,
  ['ri-account-circle-line']: Icons.RiAccountCircleLine,
  ['ri-add-circle-fill']: Icons.RiAddCircleFill,
  ['ri-add-circle-line']: Icons.RiAddCircleLine,
  ['ri-add']: Icons.RiAdd,
  ['ri-alarm-warning-fill']: Icons.RiAlarmWarningFill,
  ['ri-alarm-warning-line']: Icons.RiAlarmWarningLine,
  ['ri-arrow-down-fill']: Icons.RiArrowDownFill,
  ['ri-arrow-down-line']: Icons.RiArrowDownLine,
  ['ri-arrow-go-back-fill']: Icons.RiArrowGoBackFill,
  ['ri-arrow-go-back-line']: Icons.RiArrowGoBackLine,
  ['ri-arrow-go-forward-fill']: Icons.RiArrowGoForwardFill,
  ['ri-arrow-go-forward-line']: Icons.RiArrowGoForwardLine,
  ['ri-arrow-left-fill']: Icons.RiArrowLeftFill,
  ['ri-arrow-left-line']: Icons.RiArrowLeftLine,
  ['ri-arrow-left-right-fill']: Icons.RiArrowLeftRightFill,
  ['ri-arrow-left-right-line']: Icons.RiArrowLeftRightLine,
  ['ri-arrow-m-down-fill']: Icons.RiArrowMDownFill,
  ['ri-arrow-m-down-line']: Icons.RiArrowMDownLine,
  ['ri-arrow-m-left-fill']: Icons.RiArrowMLeftFill,
  ['ri-arrow-m-left-line']: Icons.RiArrowMLeftLine,
  ['ri-arrow-m-right-fill']: Icons.RiArrowMRightFill,
  ['ri-arrow-m-right-line']: Icons.RiArrowMRightLine,
  ['ri-arrow-m-up-fill']: Icons.RiArrowMUpFill,
  ['ri-arrow-m-up-line']: Icons.RiArrowMUpLine,
  ['ri-arrow-right-fill']: Icons.RiArrowRightFill,
  ['ri-arrow-right-line']: Icons.RiArrowRightLine,
  ['ri-arrow-up-down-fill']: Icons.RiArrowUpDownFill,
  ['ri-arrow-up-down-line']: Icons.RiArrowUpDownLine,
  ['ri-arrow-up-fill']: Icons.RiArrowUpFill,
  ['ri-arrow-up-line']: Icons.RiArrowUpLine,
  ['ri-arrow-xs-down-fill']: Icons.RiArrowXsDownFill,
  ['ri-arrow-xs-up-fill']: Icons.RiArrowXsUpFill,
  ['ri-briefcase-fill']: Icons.RiBriefcaseFill,
  ['ri-briefcase-line']: Icons.RiBriefcaseLine,
  ['ri-calendar-event-fill']: Icons.RiCalendarEventFill,
  ['ri-calendar-event-line']: Icons.RiCalendarEventLine,
  ['ri-calendar-fill']: Icons.RiCalendarFill,
  ['ri-calendar-line']: Icons.RiCalendarLine,
  ['ri-check']: Icons.RiCheck,
  ['ri-checkbox-circle-fill']: Icons.RiCheckboxCircleFill,
  ['ri-checkbox-fill']: Icons.RiCheckboxFill,
  ['ri-checkbox-indeterminate-fill']: Icons.RiCheckboxIndeterminateFill,
  ['ri-checkbox-indeterminate-line']: Icons.RiCheckboxIndeterminateLine,
  ['ri-checkbox-line']: Icons.RiCheckboxLine,
  ['ri-close-circle-fill']: Icons.RiCloseCircleFill,
  ['ri-close-circle-line']: Icons.RiCloseCircleLine,
  ['ri-close']: Icons.RiClose,
  ['ri-coins-line']: Icons.RiCoinsLine,
  ['ri-delete-bin-fill']: Icons.RiDeleteBinFill,
  ['ri-delete-bin-line']: Icons.RiDeleteBinLine,
  ['ri-error-warning-fill']: Icons.RiErrorWarningFill,
  ['ri-error-warning-line']: Icons.RiErrorWarningLine,
  ['ri-external-link-line']: Icons.RiExternalLinkLine,
  ['ri-facebook-circle-line']: Icons.RiFacebookCircleLine,
  ['ri-information-fill']: Icons.RiInformationFill,
  ['ri-information-line']: Icons.RiInformationLine,
  ['ri-instagram-line']: Icons.RiInstagramLine,
  ['ri-linkedIn-line']: Icons.RiLinkedInLine,
  ['ri-loader']: Icons.RiLoader,
  ['ri-map-fill']: Icons.RiMapFill,
  ['ri-map-line']: Icons.RiMapLine,
  ['ri-message-fill']: Icons.RiMessageFill,
  ['ri-message-line']: Icons.RiMessageLine,
  ['ri-minus']: Icons.RiMinus,
  ['ri-pencil-fill']: Icons.RiPencilFill,
  ['ri-pencil-line']: Icons.RiPencilLine,
  ['ri-question-fill']: Icons.RiQuestionFill,
  ['ri-question-line']: Icons.RiQuestionLine,
  ['ri-reply-fill']: Icons.RiReplyFill,
  ['ri-reply-line']: Icons.RiReplyLine,
  ['ri-search']: Icons.RiSearch,
  ['ri-send-plane-fill']: Icons.RiSendPlaneFill,
  ['ri-send-plane-line']: Icons.RiSendPlaneLine,
  ['ri-settings-fill']: Icons.RiSettingsFill,
  ['ri-settings-line']: Icons.RiSettingsLine,
  ['ri-timer3-fill']: Icons.RiTimer3Fill,
  ['ri-timer3-line']: Icons.RiTimer3Line,
  ['ri-twitter-line']: Icons.RiTwitterLine,
};
