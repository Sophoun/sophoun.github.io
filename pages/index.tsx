import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import type { NextPage } from 'next'
import Lottie from 'react-lottie-player';
import Layout from '../components/layout';
import Utils from '../utils/utils';
import lottieData from "../public/lf30_editor_7fbq11c3.json"

const Home: NextPage = () => {

  return (
    <>
      <Lottie
        className="absolute left-0 top-0 right-0 bottom-0 -z-50"
        loop
        animationData={lottieData}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />
      <div className="z-10">
        <Layout title={"sophoun.com"} >
          <div className="h-screen w-screen grid place-content-center">
            <div className="w-96">
              <h1 className="text-white font-bold text-center mb-3 text-[40px]">Hey,</h1>
              <h1 className="text-white font-bold text-center mb-3 text-[40px]">I&#39;m Sophoun<a className="text-green-500 ">!</a></h1>
              <p className="text-white text-center text-[20px] mb-3">Professional Flutter developer with background in Native Android development also doable backend development</p>
              <div className="flex justify-center">
                <IconButton onClick={() => Utils.openInNewTab("https://github.com/Sophoun")}>
                  <GitHub className="text-white" />
                </IconButton>
                <IconButton onClick={() => Utils.openInNewTab("https://www.linkedin.com/in/sophoun-nheum")}>
                  <LinkedIn className="text-white" />
                </IconButton>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Home
