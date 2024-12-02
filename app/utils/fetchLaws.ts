import { cache } from 'react'
import Papa from 'papaparse'

export interface Law {
  shortTitle: string
  longTitle: string
  pdfLink: string
}

export const fetchLaws = cache(async (): Promise<Law[]> => {
  const response = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10%20laws%20for%20first%20demo%20(governemnt%20billls)(Sheet1)-qXKNeG4zWh5eXXcAQ1gvkueoc3c56L.csv')
  const csvText = await response.text()
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        const laws: Law[] = results.data.map((row: any) => ({
          shortTitle: row['short title'],
          longTitle: row['long title'],
          pdfLink: row['pdf link'],
        }))
        resolve(laws)
      },
      error: (error) => {
        reject(error)
      },
    })
  })
})

