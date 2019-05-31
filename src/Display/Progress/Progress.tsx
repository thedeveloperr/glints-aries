import * as React from 'react';

import classNames from 'classnames';

import { ProgressContainer, ProgressContent, ProgressLabelWrapper } from '../../Style/Display/ProgressStyle';
import { SecondaryColor } from '../../Style/Colors';

const Progress: React.FunctionComponent<Props> = (props) => {
  const {
    className,
    percentage,
    ...defaultProps
  } = props;

  const progressValue = percentage > 100 ? 282.6 * (1 - (100 / 100)) : 282.6 * (1 - (percentage / 100));
  const color = percentage > 50 ? SecondaryColor.green : SecondaryColor.orange;

  return (
    <React.Fragment>
      {percentage >= 0 && (
        <ProgressContainer
          className={classNames('aries-progress', className)}
          progress={progressValue}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          {...defaultProps}
        >
          <ProgressContent tabIndex={-1}>
            <svg width="8em" height="8em" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke={SecondaryColor.lighterblack} strokeWidth="8" />
              <circle className="progress-circle__value" cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" />
            </svg>
            <ProgressLabelWrapper aria-hidden="true">
              {`${percentage > 100 ? 100 : percentage}%`}
              <p>COMPLETE</p>
            </ProgressLabelWrapper>
          </ProgressContent>
        </ProgressContainer>
      )}
    </React.Fragment>
  );
};

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof ProgressContainer>, 'progress'> {
  percentage: number;
}

export default Progress;
