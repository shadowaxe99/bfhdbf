# Secure Trading System API Reference

The Secure Trading System is a core component of Elysium OS, providing a reliable and transparent platform for digital transactions using the Arbitrum blockchain. This document serves as an API reference for developers integrating the Secure Trading System into their AI agents or applications within the Elysium OS ecosystem.

## Overview

The Secure Trading System API allows for the execution of secure trades, management of digital assets, and interaction with blockchain-based smart contracts. It leverages the security and transparency of the Arbitrum blockchain to ensure trustless transactions.

## Endpoints

### `initiateTrade`

Initiates a new trade transaction.

**Request:**

```typescript
POST /api/trade/initiate
Content-Type: application/json

{
  "fromAccountId": string,
  "toAccountId": string,
  "assetId": string,
  "amount": number
}
```

**Response:**

```typescript
{
  "transactionId": string,
  "status": "pending" | "completed" | "failed",
  "message": string
}
```

### `getTradeStatus`

Retrieves the status of a trade transaction.

**Request:**

```typescript
GET /api/trade/status/:transactionId
```

**Response:**

```typescript
{
  "transactionId": string,
  "status": "pending" | "completed" | "failed",
  "blockNumber": number,
  "timestamp": string
}
```

### `cancelTrade`

Cancels a pending trade transaction.

**Request:**

```typescript
POST /api/trade/cancel
Content-Type: application/json

{
  "transactionId": string
}
```

**Response:**

```typescript
{
  "transactionId": string,
  "status": "cancelled",
  "message": string
}
```

## Models

### `TradeTransaction`

Represents a trade transaction.

```typescript
interface TradeTransaction {
  transactionId: string;
  fromAccountId: string;
  toAccountId: string;
  assetId: string;
  amount: number;
  status: "pending" | "completed" | "failed" | "cancelled";
  blockNumber?: number;
  timestamp?: string;
}
```

## Errors

The Secure Trading System API uses standard HTTP response codes to indicate the success or failure of an API request. In case of an error, the response will include a message providing more details about the issue.

**Example Error Response:**

```typescript
{
  "error": "TradeNotFound",
  "message": "The specified trade transaction does not exist."
}
```

## Usage

To use the Secure Trading System API, ensure that you have the necessary authentication tokens and permissions. All requests must be made over HTTPS to ensure data security.

## BlockchainService

The `BlockchainService` in `src/services/BlockchainService.ts` interacts with the Secure Trading System API to provide a seamless experience for managing trades within the Elysium OS.

**Example Usage:**

```typescript
import { BlockchainService } from './services/BlockchainService';

const blockchainService = new BlockchainService();

// To initiate a trade
blockchainService.initiateTrade({
  fromAccountId: 'acc123',
  toAccountId: 'acc456',
  assetId: 'asset789',
  amount: 100
}).then(response => {
  console.log(response);
});

// To check the status of a trade
blockchainService.getTradeStatus('tx123').then(status => {
  console.log(status);
});

// To cancel a trade
blockchainService.cancelTrade('tx123').then(result => {
  console.log(result);
});
```

## Conclusion

The Secure Trading System API provides the necessary endpoints for secure and transparent trading on the Elysium OS platform. By integrating this API, developers can create AI agents that can autonomously manage assets and execute trades with confidence in the security of the Arbitrum blockchain.