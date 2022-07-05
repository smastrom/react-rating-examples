import { BasicUsage, BasicUsageCode } from './1.BasicUsage';
import { BasicUsageReadOnly, BasicUsageReadOnlyCode } from './1.BasicUsageReadOnly';
import { HighlightOnlySelected, HighlightOnlySelectedCode } from './2.HighlightOnlySelected';
import { ResetButton, ResetButtonCode } from './3.ResetButton';
import { ResetOnSecondClick, ResetOnSecondClickCode } from './4.ResetOnSecondClick';
import { ResetOnClickOutside, ResetOnClickOutsideCode } from './5.ResetOnClickOutside';
import { WithCustomFeedback, WithCustomFeedbackCode } from './6.CustomFeedback';
import { WithAsyncOp, WithAsyncOpCode } from './9.AsyncOnChange';
import { MultipleFormRatings, MultipleFormRatingsCode } from './10.MultipleFormRatings';
import { CustomSVGColors, CustomSVGColorsCode } from './11.CustomColors';
import { CustomBoxColors, CustomBoxColorsCode } from './12.CustomBoxColors';
import { CustomActiveColors, CustomActiveColorsCode } from './13.CustomActiveColors';
import { HalfFillSVG, HalfFillSVGCode } from './14.HalfFillSVG';
import { HalfFillBox, HalfFillBoxCode } from './15.HalfFillBox';
import { FacesRating, FacesRatingCode } from './16.FacesRating';
import { UpVoteDownVote, UpVoteDownVoteCode } from './17.UpvoteDownvote';
import { LikeBoxAsync, LikeBoxAsyncCode } from './18.AsyncLikeBox';
import { CustomInvisibleLabels, CustomInvisibleLabelsCode } from './19.CustomInvisibleLabels';
import { CustomVisibleLabels, CustomVisibleLabelsCode } from './20.CustomVisibleLabels';
import { CustomMixesLabels, CustomMixesLabelsCode } from './21.CustomMixedLabels';
import { CustomCSS, CustomCSSCode, CustomCSSCodeCSS } from './22.CustomCSS';
import { RightToLeft, RightToLeftCode } from './23.RightToLeft';

const toSnakeCase = (string) =>
  string.split(' ').join('_').replace('-', '').replace('__', '_').toLowerCase();

class Example {
  constructor(title, jsx, code, hasCSS, cssCode, isReadOnly) {
    this.title = title === 'Basic usage RO' ? title.replace(' RO', '') : title;
    this.id =
      title === 'Basic usage RO'
        ? toSnakeCase(this.title).concat('_ro')
        : toSnakeCase(this.title);
    this.jsx = jsx;
    this.code = code.trimStart();
    this.hasCSS = hasCSS;
    this.cssCode = cssCode && cssCode.trimStart();
    this.isReadOnly = isReadOnly;
  }
}

export const examples = [
  new Example('Basic usage', <BasicUsage />, BasicUsageCode),
  new Example(
    'Basic usage RO',
    <BasicUsageReadOnly />,
    BasicUsageReadOnlyCode,
    undefined,
    undefined,
    true
  ),
  new Example('Highlight only selected', <HighlightOnlySelected />, HighlightOnlySelectedCode),
  new Example('Reset button', <ResetButton />, ResetButtonCode),
  new Example('Reset on second click', <ResetOnSecondClick />, ResetOnSecondClickCode),
  new Example('Reset on click outside', <ResetOnClickOutside />, ResetOnClickOutsideCode),
  new Example('Custom feedback', <WithCustomFeedback />, WithCustomFeedbackCode),
  new Example('Asynchronous onChange', <WithAsyncOp />, WithAsyncOpCode),
  new Example('Multiple ratings in a form', <MultipleFormRatings />, MultipleFormRatingsCode),
  new Example('Custom shape and colors', <CustomSVGColors />, CustomSVGColorsCode),
  new Example('Custom box colors', <CustomBoxColors />, CustomBoxColorsCode),
  new Example('Custom active colors', <CustomActiveColors />, CustomActiveColorsCode),
  new Example('Half-fill - SVG', <HalfFillSVG />, HalfFillSVGCode, undefined, undefined, true),
  new Example('Half-fill - Box', <HalfFillBox />, HalfFillBoxCode, undefined, undefined, true),
  new Example('Faces rating', <FacesRating />, FacesRatingCode),
  new Example('Upvote / Downvote', <UpVoteDownVote />, UpVoteDownVoteCode),
  new Example('Asynchronous Like Box', <LikeBoxAsync />, LikeBoxAsyncCode),
  new Example('Custom invisible labels', <CustomInvisibleLabels />, CustomInvisibleLabelsCode),
  new Example('Custom visible labels', <CustomVisibleLabels />, CustomVisibleLabelsCode),
  new Example('Custom mixed labels', <CustomMixesLabels />, CustomMixesLabelsCode),
  new Example('Custom CSS', <CustomCSS />, CustomCSSCode, true, CustomCSSCodeCSS),
  new Example('Right to left', <RightToLeft />, RightToLeftCode),
];
