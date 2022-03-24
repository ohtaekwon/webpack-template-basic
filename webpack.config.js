// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


// export
module.exports = {
  // entry는 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./js/main.js',   // main.js를 진입점으로 설정

  // 결과물(번들)을 반환하는 설정
  output:{
    // path:path.resolve(__dirname,'dist'),
    // filename:'main.js',
    clean:true
  },
  module:{
    rules:[
      {
        // 정규 표현식 : s?css 는 scss파일도 css파일도 선택
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from:'static'}
      ]
    })
  ],
  devServer:{
    host:'localhost',
    port:5500
  }
}