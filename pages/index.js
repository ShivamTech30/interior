import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Component/Layout'
import HomePageSlider from './HomePageSlider'
import AboutSchool from './AboutSchool'
import SchoolFacilities from './SchoolFacilities'
import HomePageGallery from './HomePageGallery'
import HomeNewsClder from './HomeNewsClder'
import AboutUs from './AboutUs'
import HomePageData from './HomePageData'
import HomeOurProject from './HomeOurProject'
import MeetTeam from './MeetTeam'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomePageSlider />
        <AboutSchool />
        <SchoolFacilities />
        <AboutUs />
        <HomePageGallery />
        <HomePageData />
        <HomeOurProject />
        <MeetTeam />
        <HomeNewsClder />
      </Layout>
    </div>
  )
}
