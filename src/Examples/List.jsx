import { MinimalConfiguration, MinimalConfigurationCode } from './1.MinimalConfiguration';
import { RightToLeft, RightToLeftCode } from './2.RightToLeft';
import { HighlightOnlySelected, HighlightOnlySelectedCode } from './3.HighlightOnlySelected';
import { HalfFillSVG, HalfFillSVGCode } from './4.HalfFillSVG';
import { HalfFillBox, HalfFillBoxCode } from './4.HalfFillBox';
import { ResetButton, ResetButtonCode } from './5.ResetButton';
import { ResetOnSecondClick, ResetOnSecondClickCode } from './6.ResetOnSecondClick';
import { ResetOnClickOutside, ResetOnClickOutsideCode } from './7.ResetOnClickOutside';
import { WithCustomFeedback, WithCustomFeedbackCode } from './8.CustomFeedback';
import { WithAsyncOp, WithAsyncOpCode } from './9.AsyncOnChange';
import { MultipleFormRatings, MultipleFormRatingsCode } from './10.MultipleFormRatings';
import { CustomSVGColors, CustomSVGColorsCode } from './11.CustomSVGColors';
import { CustomBoxColors, CustomBoxColorsCode } from './12.CustomBoxColors';
import { CustomActiveColors, CustomActiveColorsCode } from './13.CustomActiveColors';
import { FacesRating, FacesRatingCode } from './14.FacesRating';
import { UpVoteDownVote, UpVoteDownVoteCode } from './15.UpvoteDownvote';
import { LikeBoxAsync, LikeBoxAsyncCode } from './16.AsyncLikeBox';
import { CustomCSS, CustomCSSCode, CustomCSSCodeCSS } from './17.CustomCSS';

const toSnakeCase = (string) =>
  string.split(' ').join('_').replace('-', '').replace('__', '_').toLowerCase();

class Example {
  constructor(title, jsx, code, hasCSS, cssCode) {
    this.title = title;
    this.id = toSnakeCase(this.title);
    this.jsx = jsx;
    this.code = code.trimStart();
    this.hasCSS = hasCSS;
    this.cssCode = cssCode && cssCode.trimStart();
  }
}

export const examples = [
  new Example('Minimal configuration', <MinimalConfiguration />, MinimalConfigurationCode),
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
  new Example('Half-fill - SVG', <HalfFillSVG />, HalfFillSVGCode),
  new Example('Half-fill - Box', <HalfFillBox />, HalfFillBoxCode),
  new Example('Faces rating', <FacesRating />, FacesRatingCode),
  new Example('Upvote / Downvote', <UpVoteDownVote />, UpVoteDownVoteCode),
  new Example('Asynchronous Like Box', <LikeBoxAsync />, LikeBoxAsyncCode),
  new Example('Custom CSS', <CustomCSS />, CustomCSSCode, true, CustomCSSCodeCSS),
  new Example('Right to left', <RightToLeft />, RightToLeftCode),
];
