interface DashboardTableBudgetProps {}

const categories = [
  'OS',
  'Produto',
  'Categoria',
  'Orçamento',
  'Cliente',
  'Entrada'
]

const items = [
  {
    os: '0001',
    product: 'Apple Imac 27',
    category: 'Desktop',
    budget: 'R$ 199,99',
    client: 'Julian',
    entrada: '20/05/2022'
  },
  {
    os: '0002',
    product: 'SAMSUNG',
    category: 'Notebook',
    budget: 'R$ 199,99',
    client: 'Jubileu',
    entrada: '20/05/2022'
  },
  {
    os: '0003',
    product: 'MOTO G',
    category: 'Smartphone',
    budget: 'R$ 199,99',
    client: 'Maria',
    entrada: '20/05/2022'
  },
  {
    os: '0004',
    product: 'WD',
    category: 'HD',
    budget: 'R$ 199,99',
    client: 'Fulano',
    entrada: '20/05/2022'
  }
]

export function DashboardTableBudget({}: DashboardTableBudgetProps) {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {categories.map((category) => (
                      <th
                        key={`dashboard-budget-${category}`}
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 md:uppercase dark:text-gray-400"
                      >
                        {category}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {items.map((item) => (
                    <tr
                      key={item.os}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.os}
                      </td>
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.product}
                      </td>
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.budget || '-'}
                      </td>
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.client}
                      </td>
                      <td className="py-4 px-6 text-xs text-center md:text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.entrada}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
