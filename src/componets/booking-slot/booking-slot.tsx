import { SlotType } from '../../types/type-booking';

type BookingSlotType = {
    slot: SlotType;
}

export default function BookingSlot ({slot}: BookingSlotType) {

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={slot.time}
        name="date"
        value={slot.time}
        required
        disabled={slot.isAvailable}

      />
      <span className="custom-radio__label">{slot.time}</span>
    </label>
  );
}
