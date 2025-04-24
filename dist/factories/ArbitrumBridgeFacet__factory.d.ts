import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200204a3803806200204a833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051611f7c620000ce60003960006106b401526000818161083001526108a90152611f7c6000f3fe6080604052600436106100295760003560e01c80633cc9517b1461002e578063c9851d0b14610043575b600080fd5b61004161003c3660046119c0565b610056565b005b610041610051366004611a6c565b6102ac565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611aea565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610248604089013560208a0135611afd565b610253908935611b14565b905061026b8b600001518c60c001518c8c33866104f3565b60c08c015261027b8b8983610693565b5047925050508181111561029e5761029e6000846102998585611aea565b6109f6565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610327576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103383447611aea565b90508480610100015115610378576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610410576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361048b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061049f604089013560208a0135611afd565b6104aa908935611b14565b90506104be89608001518a60c00151610a2c565b6104c9898983610693565b504792505050818111156104e7576104e76000846102998585611aea565b50506000909155505050565b60008380820361052f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661053e600185611aea565b81811061054d5761054d611b27565b905060200281019061055f9190611b56565b610570906080810190606001611b94565b9050600061057d82610ae1565b905073ffffffffffffffffffffffffffffffffffffffff82166105a7576105a43482611aea565b90505b60006105b38989610b2c565b90506105bf8989610c38565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105fa818b8b85610ca5565b60008361060686610ae1565b6106109190611aea565b905073ffffffffffffffffffffffffffffffffffffffff851661063a576106378882611aea565b90505b8b811015610683576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107e1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106fe9190611b14565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e482015260006101048201526101240160206040518083038185885af11580156107b6573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107db9190611bb8565b506109ba565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301526108a792917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d9190611bd1565b8560c00151611096565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135896000013560405160200161092391815260406020820181905260009082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161095396959493929190611c5c565b60006040518083038185885af1158015610971573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109b89190810190611cb3565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109e99190611d2a565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2257610a1d8383836110c2565b505050565b610a1d8282611130565b80600003610a66576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610abf5780341015610abb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610abb73ffffffffffffffffffffffffffffffffffffffff831633308461119d565b600073ffffffffffffffffffffffffffffffffffffffff821615610b2457610b1f73ffffffffffffffffffffffffffffffffffffffff8316306111fa565b610b26565b475b92915050565b60608160008167ffffffffffffffff811115610b4a57610b4a61173a565b604051908082528060200260200182016040528015610b73578160200160208202803683370190505b5090506000805b83811015610c2d57868682818110610b9457610b94611b27565b9050602002810190610ba69190611b56565b610bb7906080810190606001611b94565b9150610bc282610ae1565b838281518110610bd457610bd4611b27565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c255734838281518110610c0d57610c0d611b27565b60200260200101818151610c219190611aea565b9052505b600101610b7a565b509095945050505050565b60005b81811015610a1d5736838383818110610c5657610c56611b27565b9050602002810190610c689190611b56565b9050610c7a60e0820160c08301611e3d565b15610c9c57610c9c610c926060830160408401611b94565b8260800135610a2c565b50600101610c3b565b602084015160408501518491849184908360018114610faf5760008686610ccd600185611aea565b818110610cdc57610cdc611b27565b9050602002810190610cee9190611b56565b610cff906080810190606001611b94565b9050600089815b81811015610eac57368d8d83818110610d2157610d21611b27565b9050602002810190610d339190611b56565b9050610d62610d486060830160408401611b94565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dc55750610dc5610d7b6040830160208401611b94565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ddc5750610ddc610d7b6020830183611b94565b8015610e615750610e61610df360a0830183611e58565b610e0291600491600091611ec4565b610e0b91611eee565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e97576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610ea3908261122f565b50600101610d06565b505060005b610ebc600185611aea565b811015610fa7576000898983818110610ed757610ed7611b27565b9050602002810190610ee99190611b56565b610efa906080810190606001611b94565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f9e57868281518110610f4157610f41611b27565b6020026020010151610f5282610ae1565b610f5c9190611aea565b9250600073ffffffffffffffffffffffffffffffffffffffff821615610f83576000610f85565b865b90508315610f9c57610f9c828a6102998488611aea565b505b50600101610eb1565b50505061108a565b8760005b8181101561108757368b8b83818110610fce57610fce611b27565b9050602002810190610fe09190611b56565b9050610ff5610d486060830160408401611b94565b8061100e575061100e610d7b6040830160208401611b94565b80156110255750611025610d7b6020830183611b94565b801561103c575061103c610df360a0830183611e58565b611072576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161107e908261122f565b50600101610fb3565b50505b50505050505050505050565b610a1d8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61150c565b73ffffffffffffffffffffffffffffffffffffffff821661110f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1d73ffffffffffffffffffffffffffffffffffffffff8416838361161f565b73ffffffffffffffffffffffffffffffffffffffff821661117d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610abb73ffffffffffffffffffffffffffffffffffffffff83168261166e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166111ec57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61124461123f6020830183611b94565b61168a565b61127a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036112ba576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006112cf610d486060850160408601611b94565b6112da5760006112e0565b82608001355b905060006112fc6112f76060860160408701611b94565b610ae1565b905060006113136112f76080870160608801611b94565b90508260000361134a5761134a6113306060870160408801611b94565b6113406040880160208901611b94565b8760800135611096565b8460800135821015611395576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b6000806113a56020880188611b94565b73ffffffffffffffffffffffffffffffffffffffff16856113c960a08a018a611e58565b6040516113d7929190611f36565b60006040518083038185875af1925050503d8060008114611414576040519150601f19603f3d011682016040523d82523d6000602084013e611419565b606091505b50915091508161142c5761142c816116a6565b60006114416112f760808a0160608b01611b94565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961147260208b018b611b94565b61148260608c0160408d01611b94565b61149260808d0160608e01611b94565b8c608001358987116114a457866114ae565b6114ae8a88611aea565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611559576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156115ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f29190611bb8565b10156116195761161973ffffffffffffffffffffffffffffffffffffffff851684836116b0565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611664576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610abb5763b12d13eb6000526004601cfd5b6000813f81811580159061169e5750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166116645760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661166457633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561178d5761178d61173a565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117da576117da61173a565b604052919050565b600067ffffffffffffffff8211156117fc576117fc61173a565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261183957600080fd5b813561184c611847826117e2565b611793565b81815284602083860101111561186157600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146118a057600080fd5b50565b80356118ae8161187e565b919050565b803580151581146118ae57600080fd5b600061014082840312156118d657600080fd5b6118de611769565b905081358152602082013567ffffffffffffffff808211156118ff57600080fd5b61190b85838601611828565b6020840152604084013591508082111561192457600080fd5b5061193184828501611828565b604083015250611943606083016118a3565b6060820152611954608083016118a3565b608082015261196560a083016118a3565b60a082015260c082013560c082015260e082013560e082015261010061198c8184016118b3565b9082015261012061199e8382016118b3565b9082015292915050565b6000606082840312156119ba57600080fd5b50919050565b60008060008060a085870312156119d657600080fd5b843567ffffffffffffffff808211156119ee57600080fd5b6119fa888389016118c3565b95506020870135915080821115611a1057600080fd5b818701915087601f830112611a2457600080fd5b813581811115611a3357600080fd5b8860208260051b8501011115611a4857600080fd5b602083019550809450505050611a6186604087016119a8565b905092959194509250565b60008060808385031215611a7f57600080fd5b823567ffffffffffffffff811115611a9657600080fd5b611aa2858286016118c3565b925050611ab284602085016119a8565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b2657610b26611abb565b8082028115828204841417610b2657610b26611abb565b80820180821115610b2657610b26611abb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b8a57600080fd5b9190910192915050565b600060208284031215611ba657600080fd5b8135611bb18161187e565b9392505050565b600060208284031215611bca57600080fd5b5051919050565b600060208284031215611be357600080fd5b8151611bb18161187e565b60005b83811015611c09578181015183820152602001611bf1565b50506000910152565b60008151808452611c2a816020860160208601611bee565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a0830152611ca760c0830184611c12565b98975050505050505050565b600060208284031215611cc557600080fd5b815167ffffffffffffffff811115611cdc57600080fd5b8201601f81018413611ced57600080fd5b8051611cfb611847826117e2565b818152856020838501011115611d1057600080fd5b611d21826020830160208601611bee565b95945050505050565b602081528151602082015260006020830151610140806040850152611d53610160850183611c12565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611d8e8382611c12565b9250506060850151611db8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611e2b8187018315159052565b90950151151593019290925250919050565b600060208284031215611e4f57600080fd5b611bb1826118b3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e8d57600080fd5b83018035915067ffffffffffffffff821115611ea857600080fd5b602001915036819003821315611ebd57600080fd5b9250929050565b60008085851115611ed457600080fd5b83861115611ee157600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611f2e5780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122057f9cce06fe872c27789202c2ee27f452ba6bd6971fe06c8b50f5fea6078c79a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
