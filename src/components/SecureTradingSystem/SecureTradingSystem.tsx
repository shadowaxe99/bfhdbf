```typescript
import React, { useState, useEffect } from 'react';
import { BlockchainService } from '../../services/BlockchainService';
import './styles.module.css';

interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  timestamp: Date;
}

const SecureTradingSystem: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const fetchedTransactions = await BlockchainService.getRecentTransactions();
        setTransactions(fetchedTransactions);
      } catch (e) {
        setError('Failed to fetch transactions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="secure-trading-system">
      <h1>Secure Trading System</h1>
      {loading && <p>Loading transactions...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.from}</td>
                <td>{transaction.to}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.timestamp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SecureTradingSystem;
```