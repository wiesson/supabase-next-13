import { use } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
);

async function getData() {
    const { data, error } = await supabase.from('users').select('*');
    return data;
}

export default function Page() {
    const data = use(getData());
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
