import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeL2Facet, GnosisBridgeL2FacetInterface } from "../GnosisBridgeL2Facet";
declare type GnosisBridgeL2FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeL2Facet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeL2FacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeL2Facet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeL2Facet;
    connect(signer: Signer): GnosisBridgeL2Facet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620025df380380620025df833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161254b620000946000396000610635015261254b6000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610043575b600080fd5b61004161003c366004612096565b610056565b005b6100416100513660046120cb565b610313565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612165565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86600167ffffffffffffffff16808260e001511461027f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080890151899060009073ffffffffffffffffffffffffffffffffffffffff16156102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102df8b6105e6565b50505050505050600047905081811115610308576103086000846103038585612165565b6106cd565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161038e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061039f3447612165565b9050858061010001516103de576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761043f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610476576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88600167ffffffffffffffff16808260e001511461053b576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b01518b9060009073ffffffffffffffffffffffffffffffffffffffff1615610592576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a78d600001518e60c001518e8e33610703565b60c08e01526105b58d6105e6565b505050505050506000479050818111156105d9576105d96000846103038585612165565b5050600090915550505050565b60c081015160a08201516040517f5d1e930700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691635d1e9307916024016000604051808303818588803b15801561067a57600080fd5b505af115801561068e573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516106c2919061220d565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156106f9576106f483838361084b565b505050565b6106f482826109cd565b60008280820361073f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561074e600185612165565b81811061075d5761075d612320565b905060200281019061076f919061234f565b61078090608081019060600161238d565b9050600061078d82610af7565b905073ffffffffffffffffffffffffffffffffffffffff82166107b7576107b43482612165565b90505b60006107c38888610bb0565b90506107cf8888610cbc565b6107dc8a89898985610d29565b6000826107e885610af7565b6107f29190612165565b90508981101561083d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610898576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108e5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097691906123af565b9050808211156109bc576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6109c78484846110db565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a1a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610a5d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610834565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ab7576040519150601f19603f3d011682016040523d82523d6000602084013e610abc565b606091505b50509050806106f4576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ba8576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba391906123af565b610baa565b475b92915050565b60608160008167ffffffffffffffff811115610bce57610bce611e68565b604051908082528060200260200182016040528015610bf7578160200160208202803683370190505b5090506000805b83811015610cb157868682818110610c1857610c18612320565b9050602002810190610c2a919061234f565b610c3b90608081019060600161238d565b9150610c4682610af7565b838281518110610c5857610c58612320565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ca95734838281518110610c9157610c91612320565b60200260200101818151610ca59190612165565b9052505b600101610bfe565b509095945050505050565b60005b818110156106f45736838383818110610cda57610cda612320565b9050602002810190610cec919061234f565b9050610cfe60e0820160c083016123c8565b15610d2057610d20610d16606083016040840161238d565b82608001356111af565b50600101610cbf565b838383838260018114610ff65760008585610d45600185612165565b818110610d5457610d54612320565b9050602002810190610d66919061234f565b610d7790608081019060600161238d565b9050600089815b81811015610f2257368d8d83818110610d9957610d99612320565b9050602002810190610dab919061234f565b9050610dda610dc0606083016040840161238d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e3d5750610e3d610df3604083016020840161238d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e545750610e54610df3602083018361238d565b8015610ed95750610ed9610e6b60a08301836123e5565b610e7a91600491600091612451565b610e839161247b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f0f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f198f82611325565b50600101610d7e565b505060005b610f32600185612165565b811015610fee576000888883818110610f4d57610f4d612320565b9050602002810190610f5f919061234f565b610f7090608081019060600161238d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fe557858281518110610fb757610fb7612320565b6020026020010151610fc882610af7565b610fd29190612165565b92508215610fe557610fe58188856106cd565b50600101610f27565b5050506110cf565b8760005b818110156110cc57368b8b8381811061101557611015612320565b9050602002810190611027919061234f565b905061103c610dc0606083016040840161238d565b806110555750611055610df3604083016020840161238d565b801561106c575061106c610df3602083018361238d565b80156110835750611083610e6b60a08301836123e5565b6110b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c38d82611325565b50600101610ffa565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611603565b806000036111e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611242578034101561123e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d391906123af565b905081811015611319576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6106f483333085611712565b61133b611335602083018361238d565b3b151590565b611371576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113c6610dc0606085016040860161238d565b6113d15760006113d7565b82608001355b905060006113f36113ee606086016040870161238d565b610af7565b9050600061140a6113ee608087016060880161238d565b90508260000361144157611441611427606087016040880161238d565b611437604088016020890161238d565b876080013561192c565b846080013582101561148c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610834565b60008061149c602088018861238d565b73ffffffffffffffffffffffffffffffffffffffff16856114c060a08a018a6123e5565b6040516114ce9291906124c3565b60006040518083038185875af1925050503d806000811461150b576040519150601f19603f3d011682016040523d82523d6000602084013e611510565b606091505b5091509150816115235761152381611a6f565b60006115386113ee60808a0160608b0161238d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961156960208b018b61238d565b61157960608c0160408d0161238d565b61158960808d0160608e0161238d565b8c6080013589871161159b57866115a5565b6115a58a88612165565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611665826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a799092919063ffffffff16565b905080516000148061168657508080602001905181019061168691906124d3565b6106f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610834565b73ffffffffffffffffffffffffffffffffffffffff841661175f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117ac576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561181d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184191906123af565b905061184f82868686611a90565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e391906123af565b6118ed9190612165565b14611924576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661194c57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611999576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611a0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3291906123af565b10156106f457611a4483836000611aee565b6106f483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aee565b8051602082018181fd5b6060611a888484600085611c70565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109c79085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161112d565b801580611b8e57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8c91906123af565b155b611c1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610834565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161112d565b606082471015611d02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610834565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d2b91906124f0565b60006040518083038185875af1925050503d8060008114611d68576040519150601f19603f3d011682016040523d82523d6000602084013e611d6d565b606091505b5091509150611d7e87838387611d89565b979650505050505050565b60608315611e1f578251600003611e185773ffffffffffffffffffffffffffffffffffffffff85163b611e18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610834565b5081611a88565b611a888383815115611e345781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108349190612502565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611ebb57611ebb611e68565b60405290565b600082601f830112611ed257600080fd5b813567ffffffffffffffff80821115611eed57611eed611e68565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f3357611f33611e68565b81604052838152866020858801011115611f4c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f9057600080fd5b919050565b8015158114611fa357600080fd5b50565b8035611f9081611f95565b60006101408284031215611fc457600080fd5b611fcc611e97565b905081358152602082013567ffffffffffffffff80821115611fed57600080fd5b611ff985838601611ec1565b6020840152604084013591508082111561201257600080fd5b5061201f84828501611ec1565b60408301525061203160608301611f6c565b606082015261204260808301611f6c565b608082015261205360a08301611f6c565b60a082015260c082013560c082015260e082013560e082015261010061207a818401611fa6565b9082015261012061208c838201611fa6565b9082015292915050565b6000602082840312156120a857600080fd5b813567ffffffffffffffff8111156120bf57600080fd5b611a8884828501611fb1565b6000806000604084860312156120e057600080fd5b833567ffffffffffffffff808211156120f857600080fd5b61210487838801611fb1565b9450602086013591508082111561211a57600080fd5b818601915086601f83011261212e57600080fd5b81358181111561213d57600080fd5b8760208260051b850101111561215257600080fd5b6020830194508093505050509250925092565b81810381811115610baa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60005b838110156121ba5781810151838201526020016121a2565b50506000910152565b600081518084526121db81602086016020860161219f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526122366101608501836121c3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261227183826121c3565b925050606085015161229b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061230e8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261238357600080fd5b9190910192915050565b60006020828403121561239f57600080fd5b6123a882611f6c565b9392505050565b6000602082840312156123c157600080fd5b5051919050565b6000602082840312156123da57600080fd5b81356123a881611f95565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261241a57600080fd5b83018035915067ffffffffffffffff82111561243557600080fd5b60200191503681900382131561244a57600080fd5b9250929050565b6000808585111561246157600080fd5b8386111561246e57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124bb5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156124e557600080fd5b81516123a881611f95565b6000825161238381846020870161219f565b6020815260006123a860208301846121c356fea2646970667358221220844ad7fa9716cd61b8b89476d1f3d04162387dd0443fea6bc44e10651121b2ee64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_xDaiBridge";
            readonly type: "address";
            readonly internalType: "contract IXDaiBridgeL2";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaXDaiBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaXDaiBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GnosisBridgeL2FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeL2Facet;
}
export {};
