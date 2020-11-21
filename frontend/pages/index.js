import Layout from '../components/Layout';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <h2>Home page</h2>
            {/* <Link href="/signup">
                <a>Signup</a>
            </Link> */}
            <Link href="/signup" passHref>
                 <Button variant="contained" color="secondary">Signup</Button>
           </Link>
        </Layout>
    );
};

export default Index;
