
export default function Stats({ items }: any) {
    if (!items.length)
        return (
            <p className='stats'>
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );
    const numPacked = items.filter((item: { packed: any; }) => item.packed).length
    const percentage = Math.round((numPacked / items.length) * 100);
    return (
        <footer className='stats'>
            <em>
                {percentage === 100 ? 'You got everything! Ready to go ✈️' : `💼 You have ${items.length} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}