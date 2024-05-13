import { TCityName } from 'types/city-name.ts';

type TStatusMessageProps = {
  error: string;
  currentCity: TCityName;
};

function StatusMessage({ error, currentCity }: TStatusMessageProps) {
  if (error) {
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
