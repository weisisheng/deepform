import React from "react";
import Meta from "components/Meta";
import DashboardHome from "components/dashboard/home/DashboardHome";
import { requireAuth } from "util/auth";
import DashboardLayout from "components/dashboard/DashboardLayout";

function DashboardHomePage({ host }) {
    return (
        <>
            <Meta title="Home | Dashboard | Deepform" />
            {/* <DashboardSection host={host} /> */}
            <DashboardLayout currentPage="Home">
                <DashboardHome host={host} />
            </DashboardLayout>
        </>
    );
}

export const getServerSideProps = async (context) => ({
    props: { host: context.req.headers.host || null },
});

export default requireAuth(DashboardHomePage);
