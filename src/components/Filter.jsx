import * as Select from '@radix-ui/react-select';



function Filter({value, onChange}) {
  return (

    <div className='flex w-[60%] max-w-[14rem]'>
      <Select.Root onValueChange={onChange} value={value}>
        <Select.Trigger className="flex justify-between items-center 
          w-full p-4 rounded-md dark:bg-dark-element dark:text-white bg-white cursor-pointer shadow-md">
          
          <Select.Value placeholder="Filter by Region" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content sideOffset={5} position='popper' className='w-[var(--radix-select-trigger-width)]'>

            <Select.Viewport className='bg-white text-light-text dark:bg-dark-element dark:text-white rounded-md'>
              <Select.Group>
                <Select.Item value="africa" className="cursor-pointer hover:bg-gray-200 px-4 py-2"><Select.ItemText>Africa</Select.ItemText></Select.Item>
                <Select.Item value="america" className="cursor-pointer hover:bg-gray-200 px-4 py-2"><Select.ItemText>America</Select.ItemText></Select.Item>
                <Select.Item value="asia" className="cursor-pointer hover:bg-gray-200 px-4 py-2"><Select.ItemText>Asia</Select.ItemText></Select.Item>
                <Select.Item value="europe" className="cursor-pointer hover:bg-gray-200 px-4 py-2"><Select.ItemText>Europe</Select.ItemText></Select.Item>
                <Select.Item value="oceania" className="cursor-pointer hover:bg-gray-200 px-4 py-2"><Select.ItemText>Oceania</Select.ItemText></Select.Item>
              </Select.Group>
            </Select.Viewport>

          </Select.Content>
        </Select.Portal>
      
      </Select.Root>
    </div>
  )
}

export default Filter