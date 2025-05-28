import { useParams, useSearchParams } from 'react-router'

export default function City() {
  const { city } = useParams()
  const [searchParams] = useSearchParams()
  return (
    <>
      <p className="text-center">City</p>
      <p className="text-left">city name: {city}</p>
      {searchParams.size > 0 && (
        <span>
          {searchParams
            .toString()
            .split('&')
            .map((param, index) => (
              <span key={index}>
                {param}
                {index < searchParams.size - 1 ? ', ' : ''}
              </span>
            ))}
        </span>
      )}
    </>
  )
}
