import React, {FC} from "react"
import './upload.css'

type UploadCSVPropsType = {
    onLoad: (data: Array<Array<string>>) => void,
    onError: (error: string) => void
}

const UploadCSV: FC<UploadCSVPropsType> = ({onLoad, onError}) => {
    const isValidFileType = (file: File) => {
        const regexp = /.+(\.csv)$/
        return regexp.test(file.name)
    }
    const csvToJson = (data: string) => {
        let rows = data.split('\n')
        const temp: Array<any> = []

        rows.forEach((row) => {
            let cols = row.split(',')
            // if not empty add to array
            if (cols.length > 1) {
                // remove extra spaces
                cols = cols.map(col => {
                    return col.trim().replace(/ +/g, ' ').toString()
                })
                temp.push(cols)
            }
        })

        return temp
    }
    // const destructureJson = (data: Array<string>) => {
    //     let csvHeader: any = []
    //     let csvData: any = []
    //     data.forEach((element, key) => {
    //         if (key === 0) {
    //             csvHeader = element
    //         } else {
    //             csvData.push(element)
    //         }
    //     })
    //     return {
    //         fields: csvHeader,
    //         data: csvData
    //     }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (!files || files.length === 0) {
            onError('Select file')
            return
        }
        if (!isValidFileType(files[0])) {
            onError('File format is not correct')
            return
        }

        let reader = new FileReader()
        reader.onload = () => {
            let csvString = reader.result as string
            let csvJson = csvToJson(csvString)
            onError('')
            onLoad(csvJson)
            // onLoad(destructureJson(csvJson))
        }
        reader.readAsText(files[0])
    }

    return (
        <div className={'upload'}>
            <label className={'customFileUpload'}>
                <input type="file"
                       accept={'.csv, text/csv'}
                       multiple={false}
                       onChange={e => handleChange(e)}
                    // hidden
                />
                <i className={''}>Import Users</i>
            </label>
        </div>
    )
}

export default UploadCSV
