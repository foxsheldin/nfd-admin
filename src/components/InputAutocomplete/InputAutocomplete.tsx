import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/select-arrow-dropdown.svg";
import "./styles.scss";

interface IPropsInputAutocomplete {
  name: string;
  placeholder: string;
  arrayData: Array<string>;
  handleSet: (value: string | null) => void;
  selectedValue: string;
  disabled?: boolean;
  className?: string;
}

const InputAutocomplete = ({
  name,
  placeholder,
  arrayData,
  handleSet,
  selectedValue,
  disabled,
  className,
}: IPropsInputAutocomplete) => {
  const [displayAutocomplete, setDisplayAutocomplete] =
    useState<boolean>(false);
  const [searchValues, setSearchValues] = useState<Array<string>>(arrayData);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setSearchValues(arrayData);
    if (!arrayData) setSearchValue("");
  }, [arrayData]);

  useEffect(() => {
    setSearchValue(selectedValue ?? "");
  }, [selectedValue]);

  const handleClickInput = () => {
    setDisplayAutocomplete(!displayAutocomplete);
  };

  const handleClickAutocomplete = (item: string) => {
    setSearchValue(item);
    handleSet(item);
  };

  const handleChangeInput = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (evt.target.value === "") handleSet(null);
    setDisplayAutocomplete(true);
    const regExpValue = new RegExp(evt.target.value, "i");
    setSearchValues(arrayData.filter((item) => item.match(regExpValue)));
    setSearchValue(evt.target.value);
  };

  const handleBlurInput = () => {
    setTimeout(() => {
      setDisplayAutocomplete(false);
    }, 300);
  };

  return (
    <div className={"input-autocomplete " + className}>
      <div className="input-with-icon">
        <input
          type="search"
          name={name}
          id={name}
          className="input"
          placeholder={placeholder}
          value={searchValue}
          onClick={handleClickInput}
          onBlur={handleBlurInput}
          onChange={handleChangeInput}
          disabled={disabled ?? false}
        />
        <ArrowsIcon className="icon" />
      </div>
      {displayAutocomplete && (
        <div className="autocomplete">
          {searchValues?.map((item, index) => {
            return (
              <div
                className="autocomplete__item"
                onClick={() => handleClickAutocomplete(item)}
                key={item + "-" + index}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputAutocomplete;
