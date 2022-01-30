import React from 'react'
import Collections from '../../components/Collections/Collections';
import MenuBar from '../../components/Common/MenuBar';
import Ecosystem from '../../components/Ecosystem/Ecosystem';
import MainSection from '../../components/MainSection/MainSection';
import VirtualFuture from '../../components/VirtualFuture/VirtualFuture';
import CyberEliteMinions from '../../components/CyberEliteMinions/CyberEliteMinions';
import FeaturedIn from '../../components/FeaturedIn/FeaturedIn';
import Roadmap from '../../components/Roadmap/Roadmap';
import FAQ from '../../components/FAQ/FAQ';
import MintVIP from '../../components/MintVIP/MintVIP';
import Footer from '../../components/Common/Footer';

const LandingPage = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <MainSection />
            <Collections />
            <Ecosystem />
            <VirtualFuture />
            <CyberEliteMinions />
            <FeaturedIn />
            <Roadmap />
            <FAQ />
            <MintVIP />
            <Footer />
        </React.Fragment>
    )
}

export default LandingPage;