import React from 'react';
import PositiveIntPicker from './PositiveIntPicker';

export default function SequencePicker(props) {
  let {value, onUpdate} = props;

  return <PositiveIntPicker
    value={value}
    placeholder='Amount in peanuts (1 PMN = 10,000,000 peanuts)'
    onUpdate={(value) => onUpdate(value)}
    />
}
