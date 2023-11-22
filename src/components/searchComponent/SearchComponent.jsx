import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Input from '@mui/joy/Input'
import styles from './SearchComponent.module.css'
import { FaSearchLocation } from 'react-icons/fa'

function SearchComponent() {
  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <p className={styles.para}>Low cost bus travel from just €5</p>
      </div>
      <div className={styles.inputContainer}>
        <Select
          placeholder="Select  Departure"
          sx={{ width: 240 }}
          slotProps={{
            listbox: {
              placement: 'bottom-start',
            },
          }}
        >
          <Option value="Tirana">Tirana</Option>
          <Option value="Durres">Durres</Option>
          <Option value="Korca">Korca</Option>
        </Select>
        <Select
          placeholder="Select  Arrival"
          sx={{ width: 240 }}
          slotProps={{
            listbox: {
              placement: 'bottom-start',
            },
          }}
        >
          <Option value="Durres">Durres</Option>
          <Option value="Tirana">Tirana,</Option>
          <Option value="Korca">Korca</Option>
        </Select>
        <Input
          type="date"
          slotProps={{
            input: {
              min: '2018-06-07T00:00',
              max: '2018-06-14T00:00',
            },
          }}
        />
      </div>
      <button className="bg-[#1da1f2] text-white hover:bg-sky-700 h-8  rounded-lg mt-2 w-40 flex">
        <FaSearchLocation className="w-8 h-6  self-center" /> <p className={styles.para}>Search</p>
      </button>
    </form>
  )
}

export default SearchComponent
