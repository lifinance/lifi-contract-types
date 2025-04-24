import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
declare type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506123ae806100206000396000f3fe60806040526004361061003f5760003560e01c80635bb5d44814610044578063899cc31714610059578063ce8a97a514610079578063decb09d71461008c575b600080fd5b610057610052366004611d81565b6100ac565b005b34801561006557600080fd5b50610057610074366004611e2d565b6102de565b610057610087366004611eb3565b610557565b34801561009857600080fd5b506100576100a7366004611f02565b61077b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101383447611f6a565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b336108f0565b60c08b01526102ae8a88610a38565b5047915050818111156102d0576102d06000846102cb8585611f6a565b610dc1565b505060009091555050505050565b6102e6610df7565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff161561037c576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156104bd57600085858381811061039b5761039b611f7d565b90506040020160200160208101906103b39190611fac565b73ffffffffffffffffffffffffffffffffffffffff1603610400576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061041257610412611f7d565b905060400201602001602081019061042a9190611fac565b82600087878581811061043f5761043f611f7d565b6104559260206040909202019081019150611fac565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806104b581611fd0565b91505061037f565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c91568906105499086908690612008565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105d2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105e33447611f6a565b90508480610100015115610623576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610661576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106848160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106f9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610736576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074888608001518960c00151610e6c565b6107528888610a38565b50479150508181111561076f5761076f6000846102cb8585611f6a565b50506000909155505050565b610783610df7565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff16610818576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610865576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b60008280820361092c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561093b600185611f6a565b81811061094a5761094a611f7d565b905060200281019061095c919061207b565b61096d906080810190606001611fac565b9050600061097a82610f21565b905073ffffffffffffffffffffffffffffffffffffffff82166109a4576109a13482611f6a565b90505b60006109b08888610f6c565b90506109bc8888611078565b6109c98a898989856110e5565b6000826109d585610f21565b6109df9190611f6a565b905089811015610a2a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff90811660009081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a955781610ab1565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ad5856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610bae5760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610b126040890160208a016120b9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff16602482015260606044820152600060648201526084016000604051808303818588803b158015610b9057600080fd5b505af1158015610ba4573d6000803e3d6000fd5b5050505050610d83565b610bc18560800151828760c00151611497565b610bd160608501604086016120df565b15610c885760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c519260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610c6b57600080fd5b505af1158015610c7f573d6000803e3d6000fd5b50505050610d83565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610cb86020880188611fac565b60a089015160c08a0151610cd260408b0160208c016120b9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a4820152600060c482015260e401600060405180830381600087803b158015610d6a57600080fd5b505af1158015610d7e573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610db2919061215e565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610ded57610de88383836114c3565b505050565b610de88282611531565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e6a576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b80600003610ea6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eff5780341015610efb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610efb73ffffffffffffffffffffffffffffffffffffffff831633308461159e565b600073ffffffffffffffffffffffffffffffffffffffff821615610f6457610f5f73ffffffffffffffffffffffffffffffffffffffff8316306115fb565b610f66565b475b92915050565b60608160008167ffffffffffffffff811115610f8a57610f8a611b3b565b604051908082528060200260200182016040528015610fb3578160200160208202803683370190505b5090506000805b8381101561106d57868682818110610fd457610fd4611f7d565b9050602002810190610fe6919061207b565b610ff7906080810190606001611fac565b915061100282610f21565b83828151811061101457611014611f7d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611065573483828151811061104d5761104d611f7d565b602002602001018181516110619190611f6a565b9052505b600101610fba565b509095945050505050565b60005b81811015610de8573683838381811061109657611096611f7d565b90506020028101906110a8919061207b565b90506110ba60e0820160c083016120df565b156110dc576110dc6110d26060830160408401611fac565b8260800135610e6c565b5060010161107b565b8383838382600181146113b25760008585611101600185611f6a565b81811061111057611110611f7d565b9050602002810190611122919061207b565b611133906080810190606001611fac565b9050600089815b818110156112de57368d8d8381811061115557611155611f7d565b9050602002810190611167919061207b565b905061119661117c6060830160408401611fac565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111f957506111f96111af6040830160208401611fac565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561121057506112106111af6020830183611fac565b8015611295575061129561122760a0830183612271565b611236916004916000916122dd565b61123f91612307565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112cb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112d58f82611630565b5060010161113a565b505060005b6112ee600185611f6a565b8110156113aa57600088888381811061130957611309611f7d565b905060200281019061131b919061207b565b61132c906080810190606001611fac565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113a15785828151811061137357611373611f7d565b602002602001015161138482610f21565b61138e9190611f6a565b925082156113a1576113a1818885610dc1565b506001016112e3565b50505061148b565b8760005b8181101561148857368b8b838181106113d1576113d1611f7d565b90506020028101906113e3919061207b565b90506113f861117c6060830160408401611fac565b8061141157506114116111af6040830160208401611fac565b801561142857506114286111af6020830183611fac565b801561143f575061143f61122760a0830183612271565b611475576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61147f8d82611630565b506001016113b6565b50505b50505050505050505050565b610de88383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61190d565b73ffffffffffffffffffffffffffffffffffffffff8216611510576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610de873ffffffffffffffffffffffffffffffffffffffff84168383611a20565b73ffffffffffffffffffffffffffffffffffffffff821661157e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610efb73ffffffffffffffffffffffffffffffffffffffff831682611a6f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166115ed57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6116456116406020830183611fac565b611a8b565b61167b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116bb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116d061117c6060850160408601611fac565b6116db5760006116e1565b82608001355b905060006116fd6116f86060860160408701611fac565b610f21565b905060006117146116f86080870160608801611fac565b90508260000361174b5761174b6117316060870160408801611fac565b6117416040880160208901611fac565b8760800135611497565b8460800135821015611796576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a21565b6000806117a66020880188611fac565b73ffffffffffffffffffffffffffffffffffffffff16856117ca60a08a018a612271565b6040516117d892919061234f565b60006040518083038185875af1925050503d8060008114611815576040519150601f19603f3d011682016040523d82523d6000602084013e61181a565b606091505b50915091508161182d5761182d81611aa7565b60006118426116f860808a0160608b01611fac565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961187360208b018b611fac565b61188360608c0160408d01611fac565b61189360808d0160608e01611fac565b8c608001358987116118a557866118af565b6118af8a88611f6a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661195a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156119cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f3919061235f565b1015611a1a57611a1a73ffffffffffffffffffffffffffffffffffffffff85168483611ab1565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611a65576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610efb5763b12d13eb6000526004601cfd5b6000813f818115801590611a9f5750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611a655760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611a6557633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611b8e57611b8e611b3b565b60405290565b600082601f830112611ba557600080fd5b813567ffffffffffffffff80821115611bc057611bc0611b3b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611c0657611c06611b3b565b81604052838152866020858801011115611c1f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c6157600080fd5b50565b8035611c6f81611c3f565b919050565b80358015158114611c6f57600080fd5b60006101408284031215611c9757600080fd5b611c9f611b6a565b905081358152602082013567ffffffffffffffff80821115611cc057600080fd5b611ccc85838601611b94565b60208401526040840135915080821115611ce557600080fd5b50611cf284828501611b94565b604083015250611d0460608301611c64565b6060820152611d1560808301611c64565b6080820152611d2660a08301611c64565b60a082015260c082013560c082015260e082013560e0820152610100611d4d818401611c74565b90820152610120611d5f838201611c74565b9082015292915050565b600060608284031215611d7b57600080fd5b50919050565b60008060008060a08587031215611d9757600080fd5b843567ffffffffffffffff80821115611daf57600080fd5b611dbb88838901611c84565b95506020870135915080821115611dd157600080fd5b818701915087601f830112611de557600080fd5b813581811115611df457600080fd5b8860208260051b8501011115611e0957600080fd5b602083019550809450505050611e228660408701611d69565b905092959194509250565b600080600060408486031215611e4257600080fd5b833567ffffffffffffffff80821115611e5a57600080fd5b818601915086601f830112611e6e57600080fd5b813581811115611e7d57600080fd5b8760208260061b8501011115611e9257600080fd5b60209283019550935050840135611ea881611c3f565b809150509250925092565b60008060808385031215611ec657600080fd5b823567ffffffffffffffff811115611edd57600080fd5b611ee985828601611c84565b925050611ef98460208501611d69565b90509250929050565b60008060408385031215611f1557600080fd5b8235611f2081611c3f565b91506020830135611f3081611c3f565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610f6657610f66611f3b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611fbe57600080fd5b8135611fc981611c3f565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361200157612001611f3b565b5060010190565b6020808252818101839052600090604080840186845b8781101561206e57813561203181611c3f565b73ffffffffffffffffffffffffffffffffffffffff9081168452828601359061205982611c3f565b1683860152918301919083019060010161201e565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120af57600080fd5b9190910192915050565b6000602082840312156120cb57600080fd5b813563ffffffff81168114611fc957600080fd5b6000602082840312156120f157600080fd5b611fc982611c74565b6000815180845260005b8181101561212057602081850181015186830182015201612104565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121876101608501836120fa565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526121c283826120fa565b92505060608501516121ec608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061225f8187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122a657600080fd5b83018035915067ffffffffffffffff8211156122c157600080fd5b6020019150368190038213156122d657600080fd5b9250929050565b600080858511156122ed57600080fd5b838611156122fa57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156123475780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561237157600080fd5b505191905056fea264697066735822122033cdebbd6baebb82863ce39291babae22e9b7ebc255105f8c6494a4df1b38dd264736f6c63430008110033";
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
