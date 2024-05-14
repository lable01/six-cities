import { TCityName } from 'types/city-name.ts';
import { RequestStatus } from '../../const.ts';

type TStatusMessageProps = {
  status: RequestStatus;
  currentCity: TCityName;
};

function StatusMessage({ status, currentCity }: TStatusMessageProps) {
  if (status === RequestStatus.Failed) {
    return (
      <>
        <b className="cities__status">Network problem</b>
        <p className="cities__status-description">Please try again later</p>
      </>
    );
  }
  return (
    <>
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">
        We could not find any property available at the moment in {currentCity}
      </p>
    </>
  );
}
export default StatusMessage;
