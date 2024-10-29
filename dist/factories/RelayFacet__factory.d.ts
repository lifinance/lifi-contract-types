import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";
declare type RelayFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayFacet__factory extends ContractFactory {
    constructor(...args: RelayFacetConstructorParams);
    deploy(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayFacet>;
    getDeployTransaction(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayFacet;
    connect(signer: Signer): RelayFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200253e3803806200253e833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612479620000c56000396000607e0152600060db01526124796000f3fe60806040526004361061003f5760003560e01c8063520e603014610044578063702532721461005957806381d82dd81461006c578063981886a7146100c9575b600080fd5b610057610052366004611f70565b6100fd565b005b61005761006736600461202f565b61032f565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101893447612093565b9050868061010001516101c8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610206576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102298160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610260576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361029e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102db576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f08a600001518b60c001518b8b33610553565b60c08b01526102ff8a8861069b565b5047915050818111156103215761032160008461031c8585612093565b6106d7565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103aa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103bb3447612093565b9050846103e08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610417576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610455576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610492576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561050e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052088608001518960c0015161070d565b61052a888861069b565b5047915050818111156105475761054760008461031c8585612093565b50506000909155505050565b60008280820361058f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561059e600185612093565b8181106105ad576105ad6120cd565b90506020028101906105bf91906120fc565b6105d090608081019060600161213a565b905060006105dd82610883565b905073ffffffffffffffffffffffffffffffffffffffff8216610607576106043482612093565b90505b6000610613888861093c565b905061061f8888610a48565b61062c8a89898985610ab5565b60008261063885610883565b6106429190612093565b90508981101561068d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6040517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1906106cb9084906121ca565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610703576106fe838383610e67565b505050565b6106fe8282610fe9565b80600003610747576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107a0578034101561079c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561080d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083191906122dd565b905081811015610877576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610684565b6106fe83333085611113565b600073ffffffffffffffffffffffffffffffffffffffff821615610934576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561090b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092f91906122dd565b610936565b475b92915050565b60608160008167ffffffffffffffff81111561095a5761095a611d2a565b604051908082528060200260200182016040528015610983578160200160208202803683370190505b5090506000805b83811015610a3d578686828181106109a4576109a46120cd565b90506020028101906109b691906120fc565b6109c790608081019060600161213a565b91506109d282610883565b8382815181106109e4576109e46120cd565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a355734838281518110610a1d57610a1d6120cd565b60200260200101818151610a319190612093565b9052505b60010161098a565b509095945050505050565b60005b818110156106fe5736838383818110610a6657610a666120cd565b9050602002810190610a7891906120fc565b9050610a8a60e0820160c083016122f6565b15610aac57610aac610aa2606083016040840161213a565b826080013561070d565b50600101610a4b565b838383838260018114610d825760008585610ad1600185612093565b818110610ae057610ae06120cd565b9050602002810190610af291906120fc565b610b0390608081019060600161213a565b9050600089815b81811015610cae57368d8d83818110610b2557610b256120cd565b9050602002810190610b3791906120fc565b9050610b66610b4c606083016040840161213a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610bc95750610bc9610b7f604083016020840161213a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610be05750610be0610b7f602083018361213a565b8015610c655750610c65610bf760a0830183612313565b610c069160049160009161237f565b610c0f916123a9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c9b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ca58f8261132d565b50600101610b0a565b505060005b610cbe600185612093565b811015610d7a576000888883818110610cd957610cd96120cd565b9050602002810190610ceb91906120fc565b610cfc90608081019060600161213a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d7157858281518110610d4357610d436120cd565b6020026020010151610d5482610883565b610d5e9190612093565b92508215610d7157610d718188856106d7565b50600101610cb3565b505050610e5b565b8760005b81811015610e5857368b8b83818110610da157610da16120cd565b9050602002810190610db391906120fc565b9050610dc8610b4c606083016040840161213a565b80610de15750610de1610b7f604083016020840161213a565b8015610df85750610df8610b7f602083018361213a565b8015610e0f5750610e0f610bf760a0830183612313565b610e45576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e4f8d8261132d565b50600101610d86565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610eb4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f01576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9291906122dd565b905080821115610fd8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610684565b610fe384848461160b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611036576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611079576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610684565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110d3576040519150601f19603f3d011682016040523d82523d6000602084013e6110d8565b606091505b50509050806106fe576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611160576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111ad576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561121e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124291906122dd565b9050611250828686866116df565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156112c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e491906122dd565b6112ee9190612093565b14611325576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61134361133d602083018361213a565b3b151590565b611379576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113ce610b4c606085016040860161213a565b6113d95760006113df565b82608001355b905060006113fb6113f6606086016040870161213a565b610883565b905060006114126113f6608087016060880161213a565b9050826000036114495761144961142f606087016040880161213a565b61143f604088016020890161213a565b876080013561173d565b8460800135821015611494576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610684565b6000806114a4602088018861213a565b73ffffffffffffffffffffffffffffffffffffffff16856114c860a08a018a612313565b6040516114d69291906123f1565b60006040518083038185875af1925050503d8060008114611513576040519150601f19603f3d011682016040523d82523d6000602084013e611518565b606091505b50915091508161152b5761152b81611880565b60006115406113f660808a0160608b0161213a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961157160208b018b61213a565b61158160608c0160408d0161213a565b61159160808d0160608e0161213a565b8c608001358987116115a357866115ad565b6115ad8a88612093565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106fe9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261188a565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fe39085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161165d565b73ffffffffffffffffffffffffffffffffffffffff831661175d57505050565b73ffffffffffffffffffffffffffffffffffffffff82166117aa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561181f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184391906122dd565b10156106fe5761185583836000611999565b6106fe83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611999565b8051602082018181fd5b60006118ec826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b1b9092919063ffffffff16565b905080516000148061190d57508080602001905181019061190d9190612401565b6106fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610684565b801580611a3957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3791906122dd565b155b611ac5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610684565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106fe9084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161165d565b6060611b2a8484600085611b32565b949350505050565b606082471015611bc4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610684565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611bed919061241e565b60006040518083038185875af1925050503d8060008114611c2a576040519150601f19603f3d011682016040523d82523d6000602084013e611c2f565b606091505b5091509150611c4087838387611c4b565b979650505050505050565b60608315611ce1578251600003611cda5773ffffffffffffffffffffffffffffffffffffffff85163b611cda576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610684565b5081611b2a565b611b2a8383815115611cf65781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106849190612430565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611d7d57611d7d611d2a565b60405290565b600082601f830112611d9457600080fd5b813567ffffffffffffffff80821115611daf57611daf611d2a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611df557611df5611d2a565b81604052838152866020858801011115611e0e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e5257600080fd5b919050565b8015158114611e6557600080fd5b50565b8035611e5281611e57565b60006101408284031215611e8657600080fd5b611e8e611d59565b905081358152602082013567ffffffffffffffff80821115611eaf57600080fd5b611ebb85838601611d83565b60208401526040840135915080821115611ed457600080fd5b50611ee184828501611d83565b604083015250611ef360608301611e2e565b6060820152611f0460808301611e2e565b6080820152611f1560a08301611e2e565b60a082015260c082013560c082015260e082013560e0820152610100611f3c818401611e68565b90820152610120611f4e838201611e68565b9082015292915050565b600060608284031215611f6a57600080fd5b50919050565b60008060008060608587031215611f8657600080fd5b843567ffffffffffffffff80821115611f9e57600080fd5b611faa88838901611e73565b95506020870135915080821115611fc057600080fd5b818701915087601f830112611fd457600080fd5b813581811115611fe357600080fd5b8860208260051b8501011115611ff857600080fd5b60208301955080945050604087013591508082111561201657600080fd5b5061202387828801611f58565b91505092959194509250565b6000806040838503121561204257600080fd5b823567ffffffffffffffff8082111561205a57600080fd5b61206686838701611e73565b9350602085013591508082111561207c57600080fd5b5061208985828601611f58565b9150509250929050565b81810381811115610936577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261213057600080fd5b9190910192915050565b60006020828403121561214c57600080fd5b61215582611e2e565b9392505050565b60005b8381101561217757818101518382015260200161215f565b50506000910152565b6000815180845261219881602086016020860161215c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526121f3610160850183612180565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261222e8382612180565b9250506060850151612258608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122cb8187018315159052565b90950151151593019290925250919050565b6000602082840312156122ef57600080fd5b5051919050565b60006020828403121561230857600080fd5b813561215581611e57565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261234857600080fd5b83018035915067ffffffffffffffff82111561236357600080fd5b60200191503681900382131561237857600080fd5b9250929050565b6000808585111561238f57600080fd5b8386111561239c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156123e95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561241357600080fd5b815161215581611e57565b6000825161213081846020870161215c565b602081526000612155602083018461218056fea264697066735822122051112e1e6c02b07a35f8c5e2e0987cbba56e26dd9d607695c683da2e3e3c879664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_relaySolver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "relayReceiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relaySolver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelay";
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
        }, {
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "InvalidReceiver";
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
    static createInterface(): RelayFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayFacet;
}
export {};
