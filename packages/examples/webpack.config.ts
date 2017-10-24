import { Configuration } from 'webpack'
import * as path from 'path'

const config: Configuration = {
  entry: {
    main: ['./src/main/index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '[name]/bundle.js',
  },
}

export default config
