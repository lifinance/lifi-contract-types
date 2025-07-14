import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimismBridgeFacet__factory extends ContractFactory {
    constructor(...args: OptimismBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OptimismBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OptimismBridgeFacet;
    connect(signer: Signer): OptimismBridgeFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061234c806100206000396000f3fe60806040526004361061003f5760003560e01c80635bb5d44814610044578063899cc31714610059578063ce8a97a514610079578063decb09d71461008c575b600080fd5b610057610052366004611d1f565b6100ac565b005b34801561006557600080fd5b50610057610074366004611dcb565b6102de565b610057610087366004611e51565b610557565b34801561009857600080fd5b506100576100a7366004611ea0565b61077b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101383447611f08565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b336108f0565b60c08b01526102ae8a88610a37565b5047915050818111156102d0576102d06000846102cb8585611f08565b610dc0565b505060009091555050505050565b6102e6610df5565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff161561037c576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156104bd57600085858381811061039b5761039b611f1b565b90506040020160200160208101906103b39190611f4a565b73ffffffffffffffffffffffffffffffffffffffff1603610400576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061041257610412611f1b565b905060400201602001602081019061042a9190611f4a565b82600087878581811061043f5761043f611f1b565b6104559260206040909202019081019150611f4a565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806104b581611f6e565b91505061037f565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c91568906105499086908690611fa6565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105d2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105e33447611f08565b90508480610100015115610623576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610661576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106848160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106f9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610736576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074888608001518960c00151610e6a565b6107528888610a37565b50479150508181111561076f5761076f6000846102cb8585611f08565b50506000909155505050565b610783610df5565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff16610818576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610865576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b60008280820361092c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561093b600185611f08565b81811061094a5761094a611f1b565b905060200281019061095c9190612019565b61096d906080810190606001611f4a565b9050600061097a82610f1f565b905073ffffffffffffffffffffffffffffffffffffffff82166109a4576109a13482611f08565b90505b60006109b08888610f6a565b90506109bc8888611076565b6109c98a898989856110e3565b6000826109d585610f1f565b6109df9190611f08565b905089811015610a29576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff90811660009081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a945781610ab0565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ad4856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610bad5760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610b116040890160208a01612057565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff16602482015260606044820152600060648201526084016000604051808303818588803b158015610b8f57600080fd5b505af1158015610ba3573d6000803e3d6000fd5b5050505050610d82565b610bc08560800151828760c00151611495565b610bd0606085016040860161207d565b15610c875760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c509260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610c6a57600080fd5b505af1158015610c7e573d6000803e3d6000fd5b50505050610d82565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610cb76020880188611f4a565b60a089015160c08a0151610cd160408b0160208c01612057565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a4820152600060c482015260e401600060405180830381600087803b158015610d6957600080fd5b505af1158015610d7d573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610db191906120fc565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610dea57610de582826114c1565b505050565b610de583838361152e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e68576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b80600003610ea4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610efd5780341015610ef9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ef973ffffffffffffffffffffffffffffffffffffffff831633308461159c565b600073ffffffffffffffffffffffffffffffffffffffff821615610f6257610f5d73ffffffffffffffffffffffffffffffffffffffff8316306115f9565b610f64565b475b92915050565b60608160008167ffffffffffffffff811115610f8857610f88611ad9565b604051908082528060200260200182016040528015610fb1578160200160208202803683370190505b5090506000805b8381101561106b57868682818110610fd257610fd2611f1b565b9050602002810190610fe49190612019565b610ff5906080810190606001611f4a565b915061100082610f1f565b83828151811061101257611012611f1b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611063573483828151811061104b5761104b611f1b565b6020026020010181815161105f9190611f08565b9052505b600101610fb8565b509095945050505050565b60005b81811015610de5573683838381811061109457611094611f1b565b90506020028101906110a69190612019565b90506110b860e0820160c0830161207d565b156110da576110da6110d06060830160408401611f4a565b8260800135610e6a565b50600101611079565b8383838382600181146113b057600085856110ff600185611f08565b81811061110e5761110e611f1b565b90506020028101906111209190612019565b611131906080810190606001611f4a565b9050600089815b818110156112dc57368d8d8381811061115357611153611f1b565b90506020028101906111659190612019565b905061119461117a6060830160408401611f4a565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111f757506111f76111ad6040830160208401611f4a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561120e575061120e6111ad6020830183611f4a565b8015611293575061129361122560a083018361220f565b6112349160049160009161227b565b61123d916122a5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112c9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112d38f8261162e565b50600101611138565b505060005b6112ec600185611f08565b8110156113a857600088888381811061130757611307611f1b565b90506020028101906113199190612019565b61132a906080810190606001611f4a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461139f5785828151811061137157611371611f1b565b602002602001015161138282610f1f565b61138c9190611f08565b9250821561139f5761139f818885610dc0565b506001016112e1565b505050611489565b8760005b8181101561148657368b8b838181106113cf576113cf611f1b565b90506020028101906113e19190612019565b90506113f661117a6060830160408401611f4a565b8061140f575061140f6111ad6040830160208401611f4a565b801561142657506114266111ad6020830183611f4a565b801561143d575061143d61122560a083018361220f565b611473576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61147d8d8261162e565b506001016113b4565b50505b50505050505050505050565b610de58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ab565b73ffffffffffffffffffffffffffffffffffffffff821661150e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef973ffffffffffffffffffffffffffffffffffffffff8316826119da565b73ffffffffffffffffffffffffffffffffffffffff821661157b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610de573ffffffffffffffffffffffffffffffffffffffff841683836119f6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166115eb57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61164661163e6020830183611f4a565b6017903b1190565b61167c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116bc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116d161117a6060850160408601611f4a565b6116dc5760006116e2565b82608001355b905060006116fe6116f96080860160608701611f4a565b610f1f565b9050816000036117355761173561171b6060860160408701611f4a565b61172b6040870160208801611f4a565b8660800135611495565b6000806117456020870187611f4a565b73ffffffffffffffffffffffffffffffffffffffff168461176960a089018961220f565b6040516117779291906122ed565b60006040518083038185875af1925050503d80600081146117b4576040519150601f19603f3d011682016040523d82523d6000602084013e6117b9565b606091505b5091509150816117cc576117cc81611a45565b60006117e16116f96080890160608a01611f4a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861181260208a018a611f4a565b61182260608b0160408c01611f4a565b61183260808c0160608d01611f4a565b8b60800135898711611844578661184e565b61184e8a88611f08565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119d45773ffffffffffffffffffffffffffffffffffffffff8316611914576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611989573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ad91906122fd565b10156119d4576119d473ffffffffffffffffffffffffffffffffffffffff85168483611a4f565b50505050565b60003860003884865af1610ef95763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611a3b576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611a3b5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611a3b57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611b2c57611b2c611ad9565b60405290565b600082601f830112611b4357600080fd5b813567ffffffffffffffff80821115611b5e57611b5e611ad9565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ba457611ba4611ad9565b81604052838152866020858801011115611bbd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611bff57600080fd5b50565b8035611c0d81611bdd565b919050565b80358015158114611c0d57600080fd5b60006101408284031215611c3557600080fd5b611c3d611b08565b905081358152602082013567ffffffffffffffff80821115611c5e57600080fd5b611c6a85838601611b32565b60208401526040840135915080821115611c8357600080fd5b50611c9084828501611b32565b604083015250611ca260608301611c02565b6060820152611cb360808301611c02565b6080820152611cc460a08301611c02565b60a082015260c082013560c082015260e082013560e0820152610100611ceb818401611c12565b90820152610120611cfd838201611c12565b9082015292915050565b600060608284031215611d1957600080fd5b50919050565b60008060008060a08587031215611d3557600080fd5b843567ffffffffffffffff80821115611d4d57600080fd5b611d5988838901611c22565b95506020870135915080821115611d6f57600080fd5b818701915087601f830112611d8357600080fd5b813581811115611d9257600080fd5b8860208260051b8501011115611da757600080fd5b602083019550809450505050611dc08660408701611d07565b905092959194509250565b600080600060408486031215611de057600080fd5b833567ffffffffffffffff80821115611df857600080fd5b818601915086601f830112611e0c57600080fd5b813581811115611e1b57600080fd5b8760208260061b8501011115611e3057600080fd5b60209283019550935050840135611e4681611bdd565b809150509250925092565b60008060808385031215611e6457600080fd5b823567ffffffffffffffff811115611e7b57600080fd5b611e8785828601611c22565b925050611e978460208501611d07565b90509250929050565b60008060408385031215611eb357600080fd5b8235611ebe81611bdd565b91506020830135611ece81611bdd565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610f6457610f64611ed9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611f5c57600080fd5b8135611f6781611bdd565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f9f57611f9f611ed9565b5060010190565b6020808252818101839052600090604080840186845b8781101561200c578135611fcf81611bdd565b73ffffffffffffffffffffffffffffffffffffffff90811684528286013590611ff782611bdd565b16838601529183019190830190600101611fbc565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261204d57600080fd5b9190910192915050565b60006020828403121561206957600080fd5b813563ffffffff81168114611f6757600080fd5b60006020828403121561208f57600080fd5b611f6782611c12565b6000815180845260005b818110156120be576020818501810151868301820152016120a2565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152612125610160850183612098565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526121608382612098565b925050606085015161218a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206121fd8187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261224457600080fd5b83018035915067ffffffffffffffff82111561225f57600080fd5b60200191503681900382131561227457600080fd5b9250929050565b6000808585111561228b57600080fd5b8386111561229857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156122e55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561230f57600080fd5b505191905056fea2646970667358221220977fe784e87001c8e395581e8e05e4059301f2c2a199e7c49b6c9071eebc18e664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initOptimism";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "standardBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerOptimismBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
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
        readonly type: "event";
        readonly name: "OptimismBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OptimismInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "NotInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): OptimismBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimismBridgeFacet;
}
export {};
