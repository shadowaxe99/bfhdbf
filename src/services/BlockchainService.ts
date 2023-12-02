```typescript
import { ethers } from 'ethers';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { constants } from '../config/constants';

interface BlockchainServiceInterface {
  getWalletBalance(address: string): Promise<string>;
  sendTransaction(to: string, value: string): Promise<TransactionReceipt>;
}

export class BlockchainService implements BlockchainServiceInterface {
  private provider: ethers.providers.JsonRpcProvider;
  private wallet: ethers.Wallet;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(constants.BLOCKCHAIN_RPC_URL);
    this.wallet = new ethers.Wallet(constants.PRIVATE_KEY, this.provider);
  }

  async getWalletBalance(address: string): Promise<string> {
    try {
      const balance = await this.provider.getBalance(address);
      return ethers.utils.formatEther(balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      throw new Error('Failed to fetch wallet balance');
    }
  }

  async sendTransaction(to: string, value: string): Promise<TransactionReceipt> {
    try {
      const transaction = {
        to,
        value: ethers.utils.parseEther(value),
        // Additional transaction parameters can be set here
      };

      const txResponse = await this.wallet.sendTransaction(transaction);
      return await txResponse.wait();
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw new Error('Failed to send transaction');
    }
  }
}

// Export a singleton instance of the BlockchainService
export const blockchainService = new BlockchainService();
```

This TypeScript code defines a `BlockchainService` class that implements a `BlockchainServiceInterface`. It provides methods to get the balance of a wallet and send a transaction using the Ethereum blockchain. The `BlockchainService` class uses the `ethers.js` library to interact with the blockchain. It is initialized with a JSON RPC provider and a wallet using a private key from the application's constants configuration. The `getWalletBalance` method fetches the balance of a given address and returns it in Ether units. The `sendTransaction` method sends a transaction to the blockchain and returns the transaction receipt. A singleton instance of the `BlockchainService` is exported for use throughout the application.