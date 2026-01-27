import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MegaETHBridgeFacet, MegaETHBridgeFacetInterface } from "../MegaETHBridgeFacet";
type MegaETHBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MegaETHBridgeFacet__factory extends ContractFactory {
    constructor(...args: MegaETHBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MegaETHBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MegaETHBridgeFacet;
    connect(signer: Signer): MegaETHBridgeFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612505806100206000396000f3fe60806040526004361061003f5760003560e01c806322256e89146100445780633f44d05f146100595780634213dfff14610079578063b5a580ae1461008c575b600080fd5b610057610052366004611e35565b6100ac565b005b34801561006557600080fd5b50610057610074366004611ee1565b6102de565b610057610087366004611f1a565b610453565b34801561009857600080fd5b506100576100a7366004611f69565b610677565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610138344761201e565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b33610942565b60c08b01526102ae8a88610a89565b5047915050818111156102d0576102d06000846102cb858561201e565b610e27565b505060009091555050505050565b6102e6610e5c565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1661037b576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103c8576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917ff4630b7492ff2bf9c0e541238b1ba50baf1b992e27998b5d2f501e9bcdf4a37b910160405180910390a2505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104ce576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104df344761201e565b9050848061010001511561051f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561055d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105f5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610632576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064488608001518960c00151610ed1565b61064e8888610a89565b50479150508181111561066b5761066b6000846102cb858561201e565b50506000909155505050565b61067f610e5c565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff1615610715576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8381101561085b5761076785858381811061073557610735612031565b905060400201602001602081019061074d9190612060565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561079e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8484828181106107b0576107b0612031565b90506040020160200160208101906107c89190612060565b8260008787858181106107dd576107dd612031565b6107f39260206040909202019081019150612060565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061085381612084565b915050610718565b5073ffffffffffffffffffffffffffffffffffffffff82166108a9576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fe4cb03dc27a25a069e8330089c15f40d78e36c9e7213bc181ad3bee503cdf3ea9061093490869086906120bc565b60405180910390a150505050565b60008280820361097e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561098d60018561201e565b81811061099c5761099c612031565b90506020028101906109ae919061212f565b6109bf906080810190606001612060565b905060006109cc82610f86565b905073ffffffffffffffffffffffffffffffffffffffff82166109f6576109f3348261201e565b90505b6000610a028888610fd1565b9050610a0e88886110e5565b610a1b8a89898985611152565b600082610a2785610f86565b610a31919061201e565b905089811015610a7b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b9748131547fcb9e6c8161b0edb24a4ba5c57d1b9376798dd51f830f1aecd967c1a3b97481309074010000000000000000000000000000000000000000900460ff16610b1e576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff9081166000908152602083905260409020541680610b6d5750600181015473ffffffffffffffffffffffffffffffffffffffff165b608084015173ffffffffffffffffffffffffffffffffffffffff16610c295760c084015160a085015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610bc4604088016020890161216d565b604051806020016040528060008152506040518563ffffffff1660e01b8152600401610bf2939291906121f7565b6000604051808303818588803b158015610c0b57600080fd5b505af1158015610c1f573d6000803e3d6000fd5b5050505050610df8565b610c3c8460800151828660c00151611385565b610c4c606084016040850161223b565b15610d035760a084015160c08501516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610ccc9260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610ce657600080fd5b505af1158015610cfa573d6000803e3d6000fd5b50505050610df8565b610d1361074d6020850185612060565b15610d4a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610d7a6020870187612060565b60a088015160c0890151610d9460408a0160208b0161216d565b604051806020016040528060008152506040518763ffffffff1660e01b8152600401610dc596959493929190612256565b600060405180830381600087803b158015610ddf57600080fd5b505af1158015610df3573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161093491906122b5565b73ffffffffffffffffffffffffffffffffffffffff8316610e5157610e4c82826113b1565b505050565b610e4c83838361141e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610ecf576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b80600003610f0b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f645780341015610f60576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f6073ffffffffffffffffffffffffffffffffffffffff831633308461148c565b600073ffffffffffffffffffffffffffffffffffffffff821615610fc957610fc473ffffffffffffffffffffffffffffffffffffffff8316306114e9565b610fcb565b475b92915050565b60608160008167ffffffffffffffff811115610fef57610fef611bef565b604051908082528060200260200182016040528015611018578160200160208202803683370190505b5090506000805b838110156110da5786868281811061103957611039612031565b905060200281019061104b919061212f565b61105c906080810190606001612060565b915061106782610f86565b83828151811061107957611079612031565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110ca57348382815181106110b2576110b2612031565b602002602001018181516110c6919061201e565b9052505b6110d381612084565b905061101f565b509095945050505050565b60005b81811015610e4c573683838381811061110357611103612031565b9050602002810190611115919061212f565b905061112760e0820160c0830161223b565b156111495761114961113f6060830160408401612060565b8260800135610ed1565b506001016110e8565b8383838382600080805b8381101561136857368c8c8381811061117757611177612031565b9050602002810190611189919061212f565b90506111986020820182612060565b93506111aa6040820160208301612060565b925061124f846111bd60a08401846123c8565b6111cc91600491600091612434565b6111d59161245e565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061131e575061126961074d6060830160408401612060565b1580156112a257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561131e575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611355576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61135f8e8261151e565b5060010161115c565b5050505061137a84848484600061179b565b505050505050505050565b610e4c8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119c1565b73ffffffffffffffffffffffffffffffffffffffff82166113fe576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f6073ffffffffffffffffffffffffffffffffffffffff831682611af0565b73ffffffffffffffffffffffffffffffffffffffff821661146b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e4c73ffffffffffffffffffffffffffffffffffffffff84168383611b0c565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166114db57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61153661152e6020830183612060565b6017903b1190565b61156c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115ac576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115c161074d6060850160408601612060565b6115cc5760006115d2565b82608001355b905060006115ee6115e96080860160608701612060565b610f86565b9050816000036116255761162561160b6060860160408701612060565b61161b6040870160208801612060565b8660800135611385565b6000806116356020870187612060565b73ffffffffffffffffffffffffffffffffffffffff168461165960a08901896123c8565b6040516116679291906124a6565b60006040518083038185875af1925050503d80600081146116a4576040519150601f19603f3d011682016040523d82523d6000602084013e6116a9565b606091505b5091509150816116bc576116bc81611b5b565b60006116d16115e96080890160608a01612060565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861170260208a018a612060565b61171260608b0160408c01612060565b61172260808c0160608d01612060565b8b60800135898711611734578661173e565b61173e8a8861201e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b83600086826117ab60018261201e565b8181106117ba576117ba612031565b90506020028101906117cc919061212f565b6117dd906080810190606001612060565b905060008060008060008060005b888110156119b1576117fe60018a61201e565b8110801561180d575088600114155b156118e9578d8d8281811061182457611824612031565b9050602002810190611836919061212f565b611847906080810190606001612060565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118e9578a818151811061188e5761188e612031565b602002602001015161189f87610f86565b6118a9919061201e565b965073ffffffffffffffffffffffffffffffffffffffff8616156118ce5760006118d0565b895b9350838711156118e9576118e9868d6102cb878b61201e565b8d8d828181106118fb576118fb612031565b905060200281019061190d919061212f565b61191e906060810190604001612060565b945061192985610f86565b925073ffffffffffffffffffffffffffffffffffffffff85161561194e576000611950565b895b9150818311801561198d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119a1576119a1858d6102cb858761201e565b6119aa81612084565b90506117eb565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611aea5773ffffffffffffffffffffffffffffffffffffffff8316611a2a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac391906124b6565b1015611aea57611aea73ffffffffffffffffffffffffffffffffffffffff85168483611b65565b50505050565b60003860003884865af1610f605763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611b51576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611b515760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611b5157633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611c4257611c42611bef565b60405290565b600082601f830112611c5957600080fd5b813567ffffffffffffffff80821115611c7457611c74611bef565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611cba57611cba611bef565b81604052838152866020858801011115611cd357600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611d1557600080fd5b50565b8035611d2381611cf3565b919050565b80358015158114611d2357600080fd5b60006101408284031215611d4b57600080fd5b611d53611c1e565b905081358152602082013567ffffffffffffffff80821115611d7457600080fd5b611d8085838601611c48565b60208401526040840135915080821115611d9957600080fd5b50611da684828501611c48565b604083015250611db860608301611d18565b6060820152611dc960808301611d18565b6080820152611dda60a08301611d18565b60a082015260c082013560c082015260e082013560e0820152610100611e01818401611d28565b90820152610120611e13838201611d28565b9082015292915050565b600060608284031215611e2f57600080fd5b50919050565b60008060008060a08587031215611e4b57600080fd5b843567ffffffffffffffff80821115611e6357600080fd5b611e6f88838901611d38565b95506020870135915080821115611e8557600080fd5b818701915087601f830112611e9957600080fd5b813581811115611ea857600080fd5b8860208260051b8501011115611ebd57600080fd5b602083019550809450505050611ed68660408701611e1d565b905092959194509250565b60008060408385031215611ef457600080fd5b8235611eff81611cf3565b91506020830135611f0f81611cf3565b809150509250929050565b60008060808385031215611f2d57600080fd5b823567ffffffffffffffff811115611f4457600080fd5b611f5085828601611d38565b925050611f608460208501611e1d565b90509250929050565b600080600060408486031215611f7e57600080fd5b833567ffffffffffffffff80821115611f9657600080fd5b818601915086601f830112611faa57600080fd5b813581811115611fb957600080fd5b8760208260061b8501011115611fce57600080fd5b60209283019550935050840135611fe481611cf3565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fcb57610fcb611fef565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561207257600080fd5b813561207d81611cf3565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120b5576120b5611fef565b5060010190565b6020808252818101839052600090604080840186845b878110156121225781356120e581611cf3565b73ffffffffffffffffffffffffffffffffffffffff9081168452828601359061210d82611cf3565b168386015291830191908301906001016120d2565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261216357600080fd5b9190910192915050565b60006020828403121561217f57600080fd5b813563ffffffff8116811461207d57600080fd5b6000815180845260005b818110156121b95760208185018101518683018201520161219d565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff831660208201526060604082015260006122326060830184612193565b95945050505050565b60006020828403121561224d57600080fd5b61207d82611d28565b600073ffffffffffffffffffffffffffffffffffffffff8089168352808816602084015280871660408401525084606083015263ffffffff8416608083015260c060a08301526122a960c0830184612193565b98975050505050505050565b6020815281516020820152600060208301516101408060408501526122de610160850183612193565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123198382612193565b9250506060850151612343608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123b68187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123fd57600080fd5b83018035915067ffffffffffffffff82111561241857600080fd5b60200191503681900382131561242d57600080fd5b9250929050565b6000808585111561244457600080fd5b8386111561245157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561249e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156124c857600080fd5b505191905056fea26469706673582212206b97c06c5f7c5b7144a12c8e48f85a1369971b06df25b8523cf9b75d3cc4dedb64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initMegaETH";
        readonly inputs: readonly [{
            readonly name: "_configs";
            readonly type: "tuple[]";
            readonly internalType: "struct MegaETHBridgeFacet.Config[]";
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
            readonly name: "_defaultBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerMegaETHBridge";
        readonly inputs: readonly [{
            readonly name: "_assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMegaETHBridge";
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
            readonly name: "_megaETHData";
            readonly type: "tuple";
            readonly internalType: "struct MegaETHBridgeFacet.MegaETHData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "requiresDepositTo";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMegaETHBridge";
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
            readonly name: "_megaETHData";
            readonly type: "tuple";
            readonly internalType: "struct MegaETHBridgeFacet.MegaETHData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "requiresDepositTo";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "MegaETHBridgeRegistered";
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
        readonly name: "MegaETHInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct MegaETHBridgeFacet.Config[]";
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
        readonly name: "InvalidCallData";
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
    static createInterface(): MegaETHBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MegaETHBridgeFacet;
}
export {};
