import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

const Index = props => (
    <Layout>
        <h1>MLB</h1>
        <Dashboard data={props.data} />
    </Layout>
);

Index.getInitialProps = async function() {
    const result = await fetch(
        'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
    );
    const data = await result.json();
    return {
        data: data
    };
};

export default Index;
