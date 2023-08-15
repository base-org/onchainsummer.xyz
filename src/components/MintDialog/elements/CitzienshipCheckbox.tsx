import { FC, useCallback } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxCheckIcon } from '@/components/icons/CheckboxCheckIcon'

import { useMintDialogContext } from '../Context/useMintDialogContext'
import { siteDataSuffix } from '../types'
import ReactMarkdown from 'react-markdown'

interface CitzienshipCheckboxProps {}

export const CitzienshipCheckbox: FC<CitzienshipCheckboxProps> = ({}) => {
  const {
    info: { dropDataSuffix, dataSuffix },
    setInfo,
  } = useMintDialogContext()

  const handleDataSuffixChange = useCallback(
    (checked: boolean) => {
      setInfo((prevState) => ({
        ...prevState,
        dataSuffix: checked ? dropDataSuffix!.value : siteDataSuffix,
      }))
    },
    [dropDataSuffix, setInfo]
  )

  if (!dropDataSuffix) {
    return null
  }

  return (
    <div className="flex gap-2.5 text-[0.875rem] leading-[20px] text-[#444] my-2">
      <Checkbox.Root
        checked={dataSuffix === dropDataSuffix.value}
        onCheckedChange={handleDataSuffixChange}
        className="bg-white border-2 border-light-palette-line-heavy w-4 h-4 flex justify-center items-center flex-shrink-0 radix-state-checked:bg-ocs-blue radix-state-checked:border-ocs-blue"
        id="dataSuffix"
      >
        <Checkbox.Indicator className="">
          <CheckboxCheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="dataSuffix">
        <ReactMarkdown
        className="text-[10px]"
          components={{
            a: ({ node, ...props }) => (
              <a {...props} className="font-medium" target="_blank" />
            ),
          }}
        >
          {dropDataSuffix.label}
        </ReactMarkdown>
      </label>
    </div>
  )
}
